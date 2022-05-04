import { Component, Input, OnInit } from '@angular/core';
import { TxnsService } from 'src/app/services/txns.service';
import { Txn } from 'src/app/shared/txn';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  @Input()
  ahid!:number;

  txns!:Txn[];
  errMsg!:string;

  constructor(private txnService:TxnsService) { }

  ngOnInit(): void {
    this.txnService.getAllByAhId(this.ahid).subscribe(
      data => this.txns=data,
      err => {console.log(err);this.errMsg="Unable to load data";}
    );
  }

}
