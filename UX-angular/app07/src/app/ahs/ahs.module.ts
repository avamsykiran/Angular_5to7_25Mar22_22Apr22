import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AhsRoutingModule } from './ahs-routing.module';
import { AhsComponent } from './ahs.component';
import { AccountHolderDetailsComponent } from './account-holder-details/account-holder-details.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';
import { AccountHoldersListComponent } from './account-holders-list/account-holders-list.component';


@NgModule({
  declarations: [
    AhsComponent,
    AccountHolderDetailsComponent,
    AccountHolderFormComponent,
    AccountHoldersListComponent
  ],
  imports: [
    CommonModule,
    AhsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AhsModule { }
