import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountHoldersListComponent } from './account-holders-list/account-holders-list.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {path:'',pathMatch:'full',redirectTo:'/list'},
  {path:'list',component:AccountHoldersListComponent},
  {path:'addAH',component:AccountHolderFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccountHoldersListComponent,
    AccountHolderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
