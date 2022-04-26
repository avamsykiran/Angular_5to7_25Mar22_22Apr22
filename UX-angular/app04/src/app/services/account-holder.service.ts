import { Injectable } from '@angular/core';
import { AccountHolder } from '../models/account-holder';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {

  accountHolders:AccountHolder[];

  constructor() {
    this.accountHolders=[
      {id:1,fullName:'Vamsy Kiran Aripaka',mobile:'9052224753',mailId:'vamsy@gmail.com',currentBalance:0},
      {id:2,fullName:'Suseela Aripaka',mobile:'9051114753',mailId:'suseela@gmail.com',currentBalance:0},
      {id:3,fullName:'Indhikaa Valli Aripaka',mobile:'9053334753',mailId:'indhikaa@gmail.com',currentBalance:0},
      {id:4,fullName:'Sagar Aripaka',mobile:'9054444753',mailId:'sagar@gmail.com',currentBalance:0},
      {id:5,fullName:'Srinivas dachepalli',mobile:'9055554753',mailId:'srinu@gmail.com',currentBalance:0}
    ];
  }

  getAll():AccountHolder[] {
    return [...this.accountHolders];
  }

  getById(id:number):AccountHolder|undefined {
    return this.accountHolders.find(a => a.id==id);
  }

  add(ah:AccountHolder):AccountHolder{
    this.accountHolders.push(ah);
    return ah;
  }

  update(ah:AccountHolder):AccountHolder{
    
    let index:number = this.accountHolders.findIndex(a => a.id==ah.id);

    if(index==-1){
      throw new Error("No such record found to update");
    }
    
    this.accountHolders[index]=ah;
    
    return ah;
  }

  deleteById(id:number):void{
    
    let index:number = this.accountHolders.findIndex(a => a.id==id);

    if(index==-1){
      throw new Error("No such record found to delete");
    }
    
    this.accountHolders.splice(index,1);
  }
}
