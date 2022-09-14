import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService, editCostumer } from 'src/app/api-service.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  error : any = []; 
  editVIP: editCostumer={
    name: ''
  };

  id: any;
  name:any;

  constructor(private _service:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getVip();
  }

  alterar(event:any): void{
    const img = document.getElementById('hello') as HTMLImageElement
    img.src = URL.createObjectURL(event.target.files[0]);
  }

  editfunction(){
    this._service.editVipCostumer(this.editVIP, this.id).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigate(['vipcustomer']);
      },error=>console.log(error));
  }

  getVip(){
    this._service.getVip(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0][0].name},err=>{});
  }

}
