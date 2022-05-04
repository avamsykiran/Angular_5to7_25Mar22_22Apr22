import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { AccountHolder } from 'src/app/shared/account-holder';

@Component({
  selector: 'app-account-holders-list',
  templateUrl: './account-holders-list.component.html',
  styleUrls: ['./account-holders-list.component.css']
})
export class AccountHoldersListComponent implements OnInit {
 
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
