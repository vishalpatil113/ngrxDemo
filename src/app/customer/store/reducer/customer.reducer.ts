import {Action, createReducer, on} from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
import {Customer, University} from '../../../models/customer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[],
  Universities: any[]
}

export const initialState: CustomerState = {
  customers: [],
  Universities:[]
};


export function reducer(state = initialState , action: any): any {
  switch (action.type) {
    case CustomerActions.CustomerActionTypes.AddCustomer:
      return  {
        ...state,
        customers: [...state.customers, action.payload]
      };
    case CustomerActions.CustomerActionTypes.DeleteCustomer:
      return {
        ...state,
        customers: [...state.customers.filter(c => c.name != action.payload)]
      };
    case CustomerActions.CustomerActionTypes.GetAllUniversity:
      return {
        ...state,
        
      };
    case CustomerActions.CustomerActionTypes.GetAllUniversitySuccess:
      return {
        ...state,
        Universities: [...state.Universities, ...action.payload]
      };

    default:
      return state;
  }
}
function handleAddCustomer(state, action: CustomerActions.AddCustomer): CustomerState {
  return {
    ...state,
    customers: action.payload
  };
}

export const getAllCustomer = (state: CustomerState) => state.customers;
export const getAllUniversities = (state: CustomerState) => state.Universities;


