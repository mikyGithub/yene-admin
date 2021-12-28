import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = {
    getCodes: `${environment.api}/getallcode`,
    generateCode: `${environment.api}/generatecode`,
  };

  constructor(private readonly http: HttpClient,private db: AngularFirestore,) {}

  getCodes(): Observable<any> {
    return this.http.get(`${this.endpoint.getCodes}`);
  }

  getApplicationSetting(): Observable<any> {
    return this.db
      .collection('app-setting')
      .doc('kxQ1QnyR1ztbJG7fupS0')
      .valueChanges();
  }


  generateCode(): Observable<any> {
    return this.http.post<any>(`${this.endpoint.generateCode}`,{});
  }
}
