import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhsRoutingModule } from './ahs-routing.module';
import { AhsComponent } from './ahs.component';
import { AccountHolderDetailsComponent } from './account-holder-details/account-holder-details.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';


@NgModule({
  declarations: [
    AhsComponent,
    AccountHolderDetailsComponent,
    AccountHolderFormComponent
  ],
  imports: [
    CommonModule,
    AhsRoutingModule
  ]
})
export class AhsModule { }
