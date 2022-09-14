import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name: any;
  nif: any;
  constructor(private _service: ApiServiceService) { }

  ngOnInit(): void {
    this.name = JSON.stringify(localStorage.getItem('name')).slice(1,-1);
    this.nif = JSON.stringify(localStorage.getItem('nif')).slice(1,-1);
  }

  getCustomer(){
    this._service.getCustomer(this.nif).subscribe((res:any)=>{console.log(res)},err=>{});
  }

  // // nomes = [ "Joao Sousa", "Andre Silva", "Nuno Pereira", "Joao Silva","Bruno Dantas", "Artur Catarino","Joaquim Osvaldo"];
  // // email = [ "kibrexoppacei-5048@gmail.com", "xatracejiku-2920@gmail.com", "rigaumeddupe-7932@gmail.com", "juppepowufri-4547@gmail.com","houbeyotrofra-8116@gmail.com", "geffousauxose-4660@gmail.com","pettanneyecri-1592@gmail.com"];
  imagens = [ "1.jpeg", "7.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg"];
  // // nifs = ["245671994","190759145","201489233","189257095","227346198","204098096","199902178"];

  random = Math.floor(Math.random() * 7); 
  // //  nome = this.nomes[this.random];
  // //  mail = this.email[this.random];
  // //  nif = this.nifs[this.random];
  img = "../../assets/profile/" + this.imagens[this.random];



}
