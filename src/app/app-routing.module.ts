import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './customer/register/register.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'user',
    component: RegisterComponent
  },
  {
    path: 'master',
    component: MainComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
