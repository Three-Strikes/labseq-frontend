import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabseqBackend } from './services/labseq-backend';
import { take } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ReactiveFormsModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('labseq-frontend');

    constructor(private labseq: LabseqBackend) { }

    labseqValue = signal('');
    errorMessage = signal('');

    number: FormControl = new FormControl('');

    get nValue(): number {
        return Number.parseInt(this.number.value!);
    }

    calculateLabSeq() {
        this.labseq.GetLabSeqResult(this.nValue).pipe(take(1)).subscribe({
            next: (labseqResult) => {
                if (labseqResult > 1000000000000) {
                    this.labseqValue.set(labseqResult.toExponential());
                } else {
                    this.labseqValue.set(labseqResult.toString());
                }
            },
            error: (msg) => {
                console.error('Error getting LabSeq result:', msg);
                this.errorMessage.set(msg.error);
            }
        });
    }
}
