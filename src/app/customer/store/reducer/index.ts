import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";

import * as fromCutomer from "./customer.reducer";


export interface CustomerState {
  customers: fromCutomer.CustomerState;
}



export const reducers: ActionReducerMap<CustomerState> = {
  customers: fromCutomer.reducer
};

export const selectCustomerState = createFeatureSelector<CustomerState>(
  "starships"
);

export const selectShips = createSelector(
  selectCustomerState,
  state => state.customers
);
export const getAllShips = createSelector(selectShips, fromCutomer.getAllCustomer);


