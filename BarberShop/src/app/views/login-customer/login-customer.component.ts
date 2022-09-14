import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService, LoginCustomer } from 'src/app/api-service.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  error : boolean = false ; 
  loginCustomer: LoginCustomer={
    name:'',
    nif:undefined
  };

  constructor(private _service:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  loginfunction(){
    this._service.loginCustomer(this.loginCustomer).subscribe(
      (res:any)=>{
        console.log(res);
        localStorage.setItem('token',res.token); 
        localStorage.setItem('name',res.name); 
        localStorage.setItem('nif',res.NIF); 
        this.router.navigate(['/dashboardcustomer']);
    },error=>{this.error=true});
    
  }

}
