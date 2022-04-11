 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  accueilIsActive:boolean = true;
  enregistrementsIsActive:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  handlerClick(){

  }

}
