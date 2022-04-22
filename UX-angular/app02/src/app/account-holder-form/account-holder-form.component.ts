import { Component } from '@angular/core';
import { AccountHolder } from '../models/account-holder';

@Component({
  selector: 'app-account-holder-form',
  templateUrl: './account-holder-form.component.html',
  styleUrls: ['./account-holder-form.component.css']
})
export class AccountHolderFormComponent   {

  ah:AccountHolder;

  constructor() {
    this.ah={id:0,fullName:'',mobile:'',mailId:'',currentBalance:0};
  }

  

}
