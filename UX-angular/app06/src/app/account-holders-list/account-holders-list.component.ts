import { Component, OnInit } from '@angular/core';
import { AccountHolder } from '../models/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holders-list',
  templateUrl: './account-holders-list.component.html',
  styleUrls: ['./account-holders-list.component.css']
})
export class AccountHoldersListComponent implements OnInit  {

  ahs!:AccountHolder[];
  errMsg!:string;

  constructor(private ahService:AccountHolderService) { 
   
  }

  ngOnInit(): void {
   this.loadData(); 
  }

  loadData(){
    this.ahService.getAll().subscribe(
      data => this.ahs=data,
      err => {console.log(err); this.errMsg="Unable to load data! Please retry later"}
    );
  }

  del(id:number){
    if(confirm("Are you sure of deleting?")){
      this.ahService.deleteById(id).subscribe(
        () => this.loadData(),
        err => {console.log(err); this.errMsg="Unable to delete data! Please retry later"}
      );
    }
  }
}
