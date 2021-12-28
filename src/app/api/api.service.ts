import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = {
    getCodes: `${environment.api}/getallcode`,
    generateCode: `${environment.api}/generatecode`,
  };

  constructor(private readonly http: HttpClient) {}

  getCodes(): Observable<any> {
    return this.http.get(`${this.endpoint.getCodes}`);
  }

  generateCode(data: any): Observable<any> {
    return this.http.post<any>(`${this.endpoint.generateCode}`, data);
  }
}
