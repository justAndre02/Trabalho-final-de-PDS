import { Component, OnInit } from '@angular/core';
import { ApiServiceService, editEmployer } from 'src/app/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-tattooartist',
  templateUrl: './edit-tattooartist.component.html',
  styleUrls: ['./edit-tattooartist.component.css']
})
export class EditTattooartistComponent implements OnInit {

  constructor(private _service:ApiServiceService, private router:Router) { }
  error: any = [];
  editTattoo: editEmployer = {
    name: '',
    phone: ''
  }

  id:any;
  name:any;

  ngOnInit(): void {
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getTatooArtist();
  }

  alterar(event:any): void{
    const img = document.getElementById('hello') as HTMLImageElement
    img.src = URL.createObjectURL(event.target.files[0]);
  }

  editFunction() {
    this._service.editTatto(this.editTattoo,this.id).subscribe((res:any) => {
      console.log(res)
      this.router.navigate(["tattooartist"]);
    },(error) => console.log(error));
  }
  
  getTatooArtist(){
    this._service.getTatooArtist(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0].name},err=>{});
  }

}
