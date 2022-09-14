import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-nav-after-login',
  templateUrl: './nav-after-login.component.html',
  styleUrls: ['./nav-after-login.component.css']
})
export class NavAfterLoginComponent implements OnInit {

  constructor(private _service:ApiServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this._service.logoutCommon().subscribe(res => {console.log(res);
    this.route.navigate(['/homepage']);});
  }

}
