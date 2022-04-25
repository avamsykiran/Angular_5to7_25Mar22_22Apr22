import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountHolder } from '../models/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holder-form',
  templateUrl: './account-holder-form.component.html',
  styleUrls: ['./account-holder-form.component.css']
})
export class AccountHolderFormComponent   {

  ah:AccountHolder;

  constructor(private ahService:AccountHolderService,private router:Router) {
    this.ah={id:0,fullName:'',mobile:'',mailId:'',currentBalance:0};
  }

  save(){
    this.ahService.add(this.ah);
    this.router.navigateByUrl('/list');
  }

}
