import { Action, createAction, props } from '@ngrx/store';
import {Customer, University} from '../../../models/customer';

//export const addCustomer = createAction(
//  '[Customer] Add Customer',
//  (customer: Customer) => ({customer})
//);
export const deletCustomer = createAction(
  '[Customer] Delete Customer',
  (customer: any) => ({ customer })
);

export enum CustomerActionTypes {
  AddCustomer = '[Customer] AddCustomer',
  DeleteCustomer = '[Customer] DeleteCustomer',
  GetAllUniversity = '[University] GetAllUniversity',
  GetAllUniversitySuccess = '[University] GetAllUniversitySuccess'
}
export class AddCustomer implements Action {
  readonly type = CustomerActionTypes.AddCustomer;
  constructor(public payload: Customer) { }
}
export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DeleteCustomer;
  constructor(public payload: any) { }
}
export class GetAllUniversity implements Action {
  readonly type = CustomerActionTypes.GetAllUniversity;
  constructor() { }
}
export class GetAllUniversitySuccess implements Action {
  readonly type = CustomerActionTypes.GetAllUniversitySuccess;
  constructor(public payload: University[]) { }
}



export type CustomersActions = AddCustomer | DeleteCustomer | GetAllUniversity | GetAllUniversitySuccess;
