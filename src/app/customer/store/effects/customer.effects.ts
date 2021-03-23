import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as CustomerActions from '../action/customer.actions';
import { switchMap, map } from "rxjs/operators";
import { GetAllUniversitySuccess } from '../action/customer.actions'


@Injectable()
export class CustomerEffects {
  @Effect()
  getAllUniversites$ = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.GetAllUniversity),
    switchMap(() => {
      return this.http.get<any>(`http://universities.hipolabs.com/search?country=United+States`).pipe(
        map(response => {
         
          return new CustomerActions.GetAllUniversitySuccess(response);
        })
      );
    })
  
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
