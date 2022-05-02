import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnsRoutingModule } from './txns-routing.module';
import { TxnsComponent } from './txns.component';
import { TxnFormComponent } from './txn-form/txn-form.component';
import { StatementComponent } from './statement/statement.component';


@NgModule({
  declarations: [
    TxnsComponent,
    TxnFormComponent,
    StatementComponent
  ],
  imports: [
    CommonModule,
    TxnsRoutingModule
  ]
})
export class TxnsModule { }
