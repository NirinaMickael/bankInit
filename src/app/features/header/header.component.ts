import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlActiveService } from 'src/app/service/url-active.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeActive = "";
  constructor(private urlactive : UrlActiveService) {
  }

  ngOnInit(): void {
    this.urlactive.active$.subscribe(data=>{
      this.routeActive = data;
    })
  }
  handleClick(){
    this.routeActive = "";
  }
}
