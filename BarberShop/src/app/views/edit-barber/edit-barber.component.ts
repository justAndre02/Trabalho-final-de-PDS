import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService, editEmployer } from 'src/app/api-service.service';

@Component({
  selector: 'app-edit-barber',
  templateUrl: './edit-barber.component.html',
  styleUrls: ['./edit-barber.component.css']
})
export class EditBarberComponent implements OnInit {

  error : any = []; 
  editBarber: editEmployer={
    name: '',
    phone:''
  };

  id: any;
  name: any;

  constructor(private _service:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getBarber();
  }

  alterar(event:any): void{
    const img = document.getElementById('hello') as HTMLImageElement
    img.src = URL.createObjectURL(event.target.files[0]);
  }

  editfunction(){
    this._service.editBarber(this.editBarber, this.id).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigate(['barber']);
      },error=>console.log(error));
  }

  getBarber(){
    this._service.getBarber(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0].name},err=>{});
  }

}
