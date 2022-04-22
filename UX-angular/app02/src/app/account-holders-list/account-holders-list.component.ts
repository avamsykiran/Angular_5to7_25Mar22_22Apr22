import { Component } from '@angular/core';
import { AccountHolder } from '../models/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holders-list',
  templateUrl: './account-holders-list.component.html',
  styleUrls: ['./account-holders-list.component.css']
})
export class AccountHoldersListComponent   {

  ahs:AccountHolder[];

  constructor(private ahService:AccountHolderService) { 
    this.ahs=ahService.getAll();
  }

  del(id:number){
    if(confirm("Are you sure of deleting?")){
      this.ahService.deleteById(id);
      this.ahs=this.ahService.getAll();
    }
  }
}
