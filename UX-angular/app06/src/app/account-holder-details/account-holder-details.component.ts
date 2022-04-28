import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountHolder } from '../models/account-holder';

@Component({
  selector: 'app-account-holder-details',
  templateUrl: './account-holder-details.component.html',
  styleUrls: ['./account-holder-details.component.css']
})
export class AccountHolderDetailsComponent   {

  @Input()
  ah!:AccountHolder;

  @Output()
  delAccount:EventEmitter<number>;

  constructor() {
    this.delAccount=new EventEmitter<number>();
  }

  del(){
    this.delAccount.emit(this.ah.id);
  }
}
