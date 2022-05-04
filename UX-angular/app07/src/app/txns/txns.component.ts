import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountHolderService } from '../services/account-holder.service';
import { AccountHolder } from '../shared/account-holder';

@Component({
  selector: 'app-txns',
  templateUrl: './txns.component.html',
  styleUrls: ['./txns.component.css']
})
export class TxnsComponent implements OnInit {

  ah!:AccountHolder
  errMsg!:string;

  constructor(private activatedRoute:ActivatedRoute,private ahService:AccountHolderService) { }

  ngOnInit(): void {
    let ahid = this.activatedRoute.snapshot.params['ahid'];

    if(ahid){
      this.ahService.getById(ahid).subscribe(
        data => this.ah=data,
        err => {console.log(err);this.errMsg="Unable to load data";}
      );
    }
  }

}
