import { Component, OnInit } from '@angular/core';
import { EmployeeRegisterData,ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-tattoo',
  templateUrl: './signup-tattoo.component.html',
  styleUrls: ['./signup-tattoo.component.css']
})
export class SignupTattooComponent implements OnInit {

  constructor(private _service: ApiServiceService, private router: Router) { }
  error : boolean = false; 
  signupTattoo : EmployeeRegisterData = {
    email: '',
    phone: '',
    pass: '',
    name:'',

  }
  ngOnInit(): void {
  }

  registerFunction() {
    this._service.registerTattooArtist(this.signupTattoo).subscribe((res:any) => {
      console.log(res)
      this.router.navigate(["logintatooartist"])
    },(err) =>{ console.log(err),this.error=true})
  }
}
