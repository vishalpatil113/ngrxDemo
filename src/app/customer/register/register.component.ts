import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  country: Countries;
  countries: any[];
  states: any[];
  submitted = false;
  isFeature = false;
  isTag = false;
  isTagEmpty=false;
  feature= [{
    name: 'SEO',
    isActive: false
  },
    { name: 'Digital Marketing', isActive: false },
    {
      name: 'Suppport Center', isActive: false
    }, {
      name: 'IT Support', isActive: false
    }]
  selectedFeature: any[] = new Array();
  tags: any[] = new Array();
  registerData:any
  constructor(private fb: FormBuilder) {
    this.feature
    this.country = new Countries();
    this.countries = this.country.countries;
    }

  ngOnInit(): void {
    this.createRegisterForm();
    this.registerData = this.registerform.value;
    this.registerform.valueChanges.subscribe(() => {
      if (this.registerform.controls["tags"].status == "VALID") {
        this.isTagEmpty = false;
        this.isTag = false;

      }
      else {
        this.isTagEmpty = true;      
      }
      this.registerform.value.tag = this.tags.map(function (item) { return item["key"]; })
      this.registerform.value.features = this.selectedFeature;
      delete this.registerform.value.tag;
      this.registerData = this.registerform.value;      
     
    });
  }
  createRegisterForm() {
    this.registerform = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
      email: ['', [Validators.required, Validators.pattern(/^[aA-zZ0-9._%+-]+@[aA-zZ0-9.-]+\.[aA-zZ]{2,4}$/)]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      addressType: ['Office'],
      address: ['', Validators.required],
      features: ['', Validators.required],
      tags: this.fb.array([this.initItemRows()]),
    });
  }
  selectCountry($event) {
    this.registerform.controls['country'].setValue($event.currentTarget.value);
    this.states = this.countries.filter(c => c.country === $event.currentTarget.value);
    this.states = this.states[0].states;
    
  }
  selectfeature(feature: any) {
    if (feature.target.checked) {
      this.selectedFeature.push(feature.target.value);
      this.registerform.controls['features'].valid;
      this.isFeature = false;
    }
    else {
      this.selectedFeature.splice(feature.target.value, 1);
    }
  }
  register() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.selectedFeature.length <= 0) {
      this.registerform.controls['features'].invalid;
      this.isFeature = true
      return
    }
   
    this.addedTag();
    if (this.tags.length <= 0) {
      this.isTag = true
      return
    }
    else {
      this.isTag = false;
    }
    if (this.registerform.invalid) {      
      return;
    }
   
    
  }
  get formControls() {
    return this.registerform.controls;
  }
  initItemRows() {
    return this.fb.group({
      tag: ['', Validators.required],
      
    });
  }
  get formArray() {
    this.registerform.get('tags')['controls']
    return this.registerform.get('tags') as FormArray;
  }
  addNewRow() {
    let varlist = this.registerform.get('tags') as FormArray;   
    let formArrarylength = varlist.length-1;
    if (varlist.controls[formArrarylength].status == "INVALID") {
      this.isTagEmpty = true;
      return
    }
    else {
      varlist.push(this.initItemRows());
      this.isTag = false;
      this.isTagEmpty = false;
      return varlist;
    }
  
  }

  deleteRow(index: number, itemRow: any) {
    this.isTag = false;
    if (this.formArray.controls.length == 1) {
      return
    }
    
    this.formArray.removeAt(index);
  }
  showDelete() {
    if (this.formArray.controls.length == 1) {
      return false;
    }
    else {
      return true;
    }
  }
  addedTag() {
    let varlist = this.registerform.get('tags') as FormArray;
    let this$ = (this);
    varlist.controls.forEach(function (i, value) {
      this$.tags.push(i.value.tag)
    })
  }
  reset() {
    this.registerform.reset();
    this.createRegisterForm();
    this.submitted = false;
    this.isTagEmpty = false;
  }
}
