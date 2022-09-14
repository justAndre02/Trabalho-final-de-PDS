import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService, VIPCustumerRegisterData } from 'src/app/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error : boolean = false; 
  signupVIP: VIPCustumerRegisterData={
    nif:undefined,
    pid:undefined,
    email:'',
    pass:''
  };

  constructor(private _service:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  registerfunction(){
    this._service.registerVipCustomer(this.signupVIP).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigate(['loginvip']);
      },error=>{console.log(error),this.error=true});
  }

}
