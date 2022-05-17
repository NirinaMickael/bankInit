import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, of, Subject, Subscriber } from 'rxjs';
import retour_api_page_create_data from './../../features/loan/loan-create/retour_api_page_create_data.json';
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  getPageCreateData(): Observable<any>
  {
      return of(retour_api_page_create_data);
  }
}
