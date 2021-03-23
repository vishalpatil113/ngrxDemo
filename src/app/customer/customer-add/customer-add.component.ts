import {Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Customer} from '../../models/customer';
import { AddCustomer} from '../store/action/customer.actions';
import {CustomerState} from '../store/reducer/customer.reducer';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})

export class CustomerAddComponent {
  @ViewChild('box')
  myInputVariable: ElementRef;
  constructor(private store: Store<CustomerState>) {
  }

  addCustomer(customerName: string): void {
    if (customerName) {
      const customer = new Customer({});
      customer.name = customerName;
      this.store.dispatch(new AddCustomer(customer));
      this.myInputVariable.nativeElement.value = "";
    }
  }
 
}
