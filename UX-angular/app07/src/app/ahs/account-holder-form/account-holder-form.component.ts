import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountHolderService } from 'src/app/services/account-holder.service';

@Component({
  selector: 'app-account-holder-form',
  templateUrl: './account-holder-form.component.html',
  styleUrls: ['./account-holder-form.component.css']
})
export class AccountHolderFormComponent  {

  idFC:FormControl;
  fullNameFC:FormControl;
  mobileFC:FormControl;
  mailIdFC:FormControl;

  ahForm:FormGroup;

  errMsg!:string;

  constructor(private ahService:AccountHolderService,private router:Router) {
    this.idFC=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.fullNameFC=new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]);
    this.mobileFC=new FormControl('',[Validators.required,Validators.pattern('[1-9][0-9]{9}')]);
    this.mailIdFC=new FormControl('',[Validators.required,Validators.email]);

    this.ahForm = new FormGroup({
      id:this.idFC,fullName:this.fullNameFC,mobile:this.mobileFC,mailId:this.mailIdFC
    });
  }

  save(){
    this.ahService.add({...this.ahForm.value,currentBalance:0}).subscribe(
      data => this.router.navigateByUrl('/ahs/list'),
      err => {console.log(err); this.errMsg="Unable to save, please retry later!"}
    );
  }

}
