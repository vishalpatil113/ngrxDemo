import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer, University} from '../../models/customer';
import {select, Store} from '@ngrx/store';
import { selectCustomers, selectUniversities} from '../store/selector/customer.selectors';
import { CustomerState } from '../store/reducer/customer.reducer';
import { DeleteCustomer, GetAllUniversity } from '../store/action/customer.actions';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  countries = COUNTRIES;
  customers: Customer[];
  universities: University[];
  constructor(private store: Store<CustomerState>) {
    
  }
  ngOnInit() {
    this.store.dispatch(new GetAllUniversity());
    this.store.pipe(select(selectCustomers)).subscribe(c => {
      this.customers=c
    });
    this.store.pipe(select(selectUniversities)).subscribe(u => {
      this.universities = u.slice(0, 10);
    });
  }

  deleteCustomer(customerName: string): void {
    
    this.store.dispatch(new DeleteCustomer(customerName));
  }
 
}
