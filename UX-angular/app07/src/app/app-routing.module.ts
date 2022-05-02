import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path:'',pathMatch:'full',component:HomeComponent},
  { path: 'ahs', loadChildren: () => import('./ahs/ahs.module').then(m => m.AhsModule) }, 
  { path: 'txns', loadChildren: () => import('./txns/txns.module').then(m => m.TxnsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
