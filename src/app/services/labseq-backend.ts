import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class LabseqBackend {
    private http = inject(HttpClient);



    public GetLabSeqResult(n: number): Observable<number> {
        return this.http.get<number>(environment.backendUrl + 'labseq/' + n);
    }
}
