import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/core/models/list';
import { Loan } from 'src/app/core/models/loan';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],
})
export class LoanListComponent implements OnInit {
  pos: number = 0;
  loanList: Loan[] = List;
  header = ["client","dateDuPret"];
  constructor() {}

  ngOnInit(): void {}

  showList(index: any,pos:number): boolean {
    let isHidden = false
    const listCount = Math.round(this.loanList.length/10);
       if( index>=pos*listCount && index < (pos+1)*listCount){
         isHidden = true;
       }
    return isHidden;
  }
  handleClickButton(event : Event) {
    const btn = (event.currentTarget as HTMLElement).innerHTML;
    if(btn=="Next"){
      this.pos = this.pos+1;
    }else{
      this.pos = this.pos-1;
    }
  }
  handleClickNumber(event : Event){
    const currentElemnt = parseInt((event.currentTarget as HTMLElement).innerHTML);
    this.pos=currentElemnt-1;

  }
}
