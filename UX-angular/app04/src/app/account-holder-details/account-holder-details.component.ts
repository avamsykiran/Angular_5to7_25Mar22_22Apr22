import { Component, Input } from '@angular/core';
import { AccountHolder } from '../models/account-holder';

@Component({
  selector: 'app-account-holder-details',
  templateUrl: './account-holder-details.component.html',
  styleUrls: ['./account-holder-details.component.css']
})
export class AccountHolderDetailsComponent   {

  @Input()
  ah!:AccountHolder;

  constructor() { }

}
