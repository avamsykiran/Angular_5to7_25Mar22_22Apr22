import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountHoldersListComponent } from './account-holders-list/account-holders-list.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';
import { AccountHolderDetailsComponent } from './account-holder-details/account-holder-details.component';

const routes : Routes = [
  {path:'',pathMatch:'full',redirectTo:'/list'},
  {path:'list',component:AccountHoldersListComponent},
  {path:'addAH',component:AccountHolderFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccountHoldersListComponent,
    AccountHolderFormComponent,
    AccountHolderDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
