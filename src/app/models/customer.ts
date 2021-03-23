export class Customer {
  name: any;
  mobile: number;
  email: string;
  pincode: number;
  city: string;
  district: string;
  country: string;
  address: Addresses[]
  constructor(customer) {
    this.name = customer.name || null;
    this.mobile = customer.mobile || null;
    this.email = customer.email || '';
    this.pincode = customer.pincode || '';
    this.district = customer.district || '';
    this.city = customer.city || '';
    this.country = customer.country || '';
    this.address = customer.address || new Array();

  }
}
export class University {
  web_pages: string;
  country: string;
  state_Province: string;
  domains: string;
  name: string;
  alpha_two_code: string;
  constructor(customer) {
    this.name = customer.name || null;
    this.country = customer.country || null;
    this.state_Province = customer.state_Province || null;
    this.web_pages = customer.web_pages || null;
    this.alpha_two_code = customer.alpha_two_code || null;
    this.domains = customer.domains || null;
  }
}
export class Addresses {
  address: string;
}

