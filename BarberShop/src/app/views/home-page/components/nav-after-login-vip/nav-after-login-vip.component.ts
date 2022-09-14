import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-nav-after-login-vip',
  templateUrl: './nav-after-login-vip.component.html',
  styleUrls: ['./nav-after-login-vip.component.css']
})
export class NavAfterLoginVipComponent implements OnInit {

  constructor(private _service:ApiServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("nif");
    this._service.logout().subscribe(res => {console.log(res);
      this.route.navigate(['/homepage']);});
  }

}
