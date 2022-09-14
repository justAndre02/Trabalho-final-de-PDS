import { Component, OnInit } from '@angular/core';
import { EmployeeRegisterData,ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-barber',
  templateUrl: './signup-barber.component.html',
  styleUrls: ['./signup-barber.component.css']
})
export class SignupBarberComponent implements OnInit {

  constructor(private _service: ApiServiceService, private router: Router) { }

  error : boolean = false; 
  signupBarber : EmployeeRegisterData = {
    email: '',
    phone: '',
    pass: '',
    name:'',

  }
  ngOnInit(): void {
  }
  registerFunction() {
    this._service.registerBarber(this.signupBarber).subscribe((res:any) => {
      console.log(res)
      this.router.navigate(["loginbarber"])
    },(err) => {console.log(err),this.error=true})
  }
}
