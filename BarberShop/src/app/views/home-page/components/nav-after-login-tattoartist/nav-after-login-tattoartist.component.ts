import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-nav-after-login-tattoartist',
  templateUrl: './nav-after-login-tattoartist.component.html',
  styleUrls: ['./nav-after-login-tattoartist.component.css']
})
export class NavAfterLoginTattoartistComponent implements OnInit {

  constructor(private _service:ApiServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this._service.logout().subscribe(res => {console.log(res);
      this.route.navigate(['/homepage']);});
  }

}
