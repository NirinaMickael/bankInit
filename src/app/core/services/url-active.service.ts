import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlActiveService implements OnInit{
  active$ = new BehaviorSubject<any>("")
  constructor(private active:Router) { }
  ngOnInit(): void {
  }
}
