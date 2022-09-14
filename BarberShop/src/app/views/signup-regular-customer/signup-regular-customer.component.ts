import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService, RegularCustomerRegisterData } from 'src/app/api-service.service';


@Component({
  selector: 'app-signup-regular-customer',
  templateUrl: './signup-regular-customer.component.html',
  styleUrls: ['./signup-regular-customer.component.css']
})
export class SignupRegularCustomerComponent implements OnInit {

  error : boolean = false; 
  signupCustomer: RegularCustomerRegisterData={
    nif:undefined,
    name:''
  };
  
  constructor(private _service:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  registerfunction(){
    this._service.registerCustomer(this.signupCustomer).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigate(['logincustomer']);
      },error=>{console.log(error),this.error=true});
  }
}
