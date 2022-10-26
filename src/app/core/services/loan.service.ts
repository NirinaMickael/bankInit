import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import retour_api_page_create_data from './../../features/loan/loan-create/retour_api_page_create_data.json';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  //PROPRIÉTÉS
  data$ = new BehaviorSubject<any>("");
  loanSaveUrl:string
  headers:any

  //METHODES
  constructor(private http: HttpClient) {
    this.loanSaveUrl = "http://localhost:3000/loanSave"
    this.headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
  }

  getPageCreateData(): Observable<any>
  {
      return of(retour_api_page_create_data);
  }

  loanCreate(data:any): Observable<any>{
<<<<<<< HEAD
    this.data$.next(data);
    //fghjkl
    return of(data);
=======
    return this.http.post<any>(this.loanSaveUrl, JSON.stringify(data), {headers: this.headers})
>>>>>>> dev
  }
}
