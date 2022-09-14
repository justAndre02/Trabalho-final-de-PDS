import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-tableprice',
  templateUrl: './tableprice.component.html',
  styleUrls: ['./tableprice.component.css']
})
export class tablepriceComponent implements OnInit {
id : any
name : any
phone :any
email : any

  constructor(private _service: ApiServiceService) { }

  ngOnInit(): void {
    this.email = JSON.stringify(localStorage.getItem('email'));
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getTatooArtist();
  }

  getTatooArtist(){
    this._service.getTatooArtist(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0].name, this.phone = res[0].phone},err=>{});
  }

  // nomes = [ "Joao Sousa", "Andre Silva", "Nuno Pereira", "Joao Silva","Bruno Dantas", "Artur Catarino","Joaquim Osvaldo"];
  // email = [ "kibrexoppacei-5048@gmail.com", "xatracejiku-2920@gmail.com", "rigaumeddupe-7932@gmail.com", "juppepowufri-4547@gmail.com","houbeyotrofra-8116@gmail.com", "geffousauxose-4660@gmail.com","pettanneyecri-1592@gmail.com"];
  imagens = [ "1.jpeg", "7.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg"];
  // contacto = ["96235940","913741843","923056194","913759385","934758234","912345132","912750275"];

  random = Math.floor(Math.random() * 7); 
  //  nome = this.nomes[this.random];
  //  mail = this.email[this.random];
  //  contactos = this.contacto[this.random];
  img = "../../../assets/profile/" + this.imagens[this.random];

}
