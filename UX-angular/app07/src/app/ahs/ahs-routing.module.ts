import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';
import { AccountHoldersListComponent } from './account-holders-list/account-holders-list.component';
import { AhsComponent } from './ahs.component';

const routes: Routes = [
  { path: '', 
    component: AhsComponent,
    children:[
      {path:'',pathMatch:'full',redirectTo:'list'},
      {path:'list',component:AccountHoldersListComponent},
      {path:'add',component:AccountHolderFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhsRoutingModule { }
