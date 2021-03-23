import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';
import { CustomerEffects } from './store/effects/customer.effects';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'user',
    component: RegisterComponent
  }
];


@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent, RegisterComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    EffectsModule.forRoot([CustomerEffects]),
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent
  ]
})
export class CustomerModule {
}
