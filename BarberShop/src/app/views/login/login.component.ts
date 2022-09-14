import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService, Login } from 'src/app/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error : boolean = false ; 
  login: Login={
    email:'',
    pass:''
  };
  constructor(private _service:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  loginfunction(){
    this._service.loginVip(this.login).subscribe(
      (res:any)=>{
        console.log(res);
        localStorage.setItem('token',res.token); 
        localStorage.setItem('email',res.UserEmail); 
        localStorage.setItem('Lid',res.UserId);   
        this.router.navigate(['../dashboardvip']);
    },error=>{this.error= true;});
    
    
  }

}
