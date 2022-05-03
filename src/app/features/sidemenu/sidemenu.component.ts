import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlActiveService } from 'src/app/service/url-active.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private urlactive:UrlActiveService) { }
  
  ngOnInit(): void {
  }
  handleclick(event:Event){
    event.preventDefault();
    this.urlactive.active$.next((event.currentTarget as HTMLElement).innerHTML);
  }
}
 