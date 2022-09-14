import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-nav-after-login-barber',
  templateUrl: './nav-after-login-barber.component.html',
  styleUrls: ['./nav-after-login-barber.component.css']
})
export class NavAfterLoginBarberComponent implements OnInit {

  constructor(private _service:ApiServiceService, private route: Router) { }
  ngOnInit(): void {
  }

  logout(){
    this._service.logout().subscribe(res => {console.log(res);
      this.route.navigate(['/homepage']);});
  }

}
