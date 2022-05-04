import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlActiveService } from 'src/app/core/services/url-active.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  routeActive !: string; 
  constructor(private urlactive:UrlActiveService,private route : Router) { }
  
  ngOnInit(): void {
  }
  handleclick(event:Event){
    event.preventDefault();
    const linkItem = (event.currentTarget as HTMLElement);
    // linkItem.classList.toggle('activeLink')
    // console.log(this.route)
    this.urlactive.active$.next(linkItem.innerHTML); 
    this.urlactive.active$.subscribe(data=>this.routeActive=data)
  }
}
 