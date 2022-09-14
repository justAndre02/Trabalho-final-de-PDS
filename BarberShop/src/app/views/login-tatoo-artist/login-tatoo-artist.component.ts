import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService, Login } from 'src/app/api-service.service';



@Component({
  selector: 'app-login-tatoo-artist',
  templateUrl: './login-tatoo-artist.component.html',
  styleUrls: ['./login-tatoo-artist.component.css']
})
export class LoginTatooArtistComponent implements OnInit {
  error : boolean = false ; 
  login: Login={
    email:'',
    pass:''
  };

  constructor(private _service:ApiServiceService, private router:Router) { }


  ngOnInit(): void {
  }

  loginfunction(){
    this._service.loginTatooArtist(this.login).subscribe(
      (res:any)=>{
        console.log(res);
        localStorage.setItem('token',res.token); 
        localStorage.setItem('email',res.UserEmail); 
        localStorage.setItem('Lid',res.UserId);   
        this.router.navigate(['/dashboardtatooartist']);
    },error=>{this.error=true});
    
  }

}
