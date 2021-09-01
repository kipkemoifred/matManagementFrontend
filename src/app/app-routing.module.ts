import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'',redirectTo:'/first',pathMatch:'full'},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  {path:'**',component:SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
