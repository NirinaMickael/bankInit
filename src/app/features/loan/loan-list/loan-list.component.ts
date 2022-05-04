import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faEye ,faForward,faBackward, faEdit, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { List } from 'src/app/core/models/list';
import { Loan } from 'src/app/core/models/loan';
@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],
})
export class LoanListComponent implements OnInit , AfterViewInit{
  pos: number = 0;
  loanList: Loan[] = List; 
  listOfLoanSearch !: Loan[];
  isTyping : boolean = false;
  // Nos Icons 
  EyeIcon = faEye;EditIcon = faEdit;nextIcon = faForward;prevIcon = faBackward;
  text$ = new BehaviorSubject<string>("")
  @ViewChild('input',{static:true}) input !: ElementRef;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //  gerer l'observable d'input
    fromEvent(this.input.nativeElement,'input').pipe(
      map(toAnyValue => toAnyValue as any),
      map(toValue => toValue.target?.value),
      map(toString => toString as string),
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(data=>{
      this.isTyping = true;
      this.handleSearchInput(data)
    })
  }
  showList(index: any,pos:number): boolean {
    let isHidden = true;
    const listCount = Math.round(this.loanList.length/10);
       if( index>=pos*listCount && index < (pos+1)*listCount){
         isHidden = false;
       }
    return isHidden;
  }
  handleClickButton(event : Event) {
    const btn = (event.currentTarget as HTMLElement);
    if(btn.classList.contains('next')){
      this.pos = this.pos+1;
    }else{
      this.pos = this.pos-1;
    }
  }
  handleClickNumber(event : Event){
    const currentElemnt = parseInt((event.currentTarget as HTMLElement).innerHTML);
    this.pos=currentElemnt-1;
  }
  handleSearchInput(inputText : string){
    const expression = `^${inputText}`;
    const regex = new RegExp(expression,'i');
    if(inputText.length){
      this.listOfLoanSearch = this.loanList.filter( (item)=>{
        return regex.test(item.client)
      })
    }else{
      this.isTyping = false;
      this.loanList = List;
    }
  }
}
