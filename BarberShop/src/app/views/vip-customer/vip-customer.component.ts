import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-vip-customer',
  templateUrl: './vip-customer.component.html',
  styleUrls: ['./vip-customer.component.css']
})
export class VipCustomerComponent implements OnInit {
  id : any
  name : any
  nif :any
  email : any

  constructor(private _service: ApiServiceService) { }

  ngOnInit(): void {
    this.email = JSON.stringify(localStorage.getItem('email')).slice(1,-1);
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getVip();
  }

  getVip(){
    this._service.getVip(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0][0].name, this.nif = res[0][0].NIF},err=>{});
  }

  // nomes = [ "Joao Sousa", "Andre Silva", "Nuno Pereira", "Joao Silva","Bruno Dantas", "Artur Catarino","Joaquim Osvaldo"];
  // email = [ "kibrexoppacei-5048@gmail.com", "xatracejiku-2920@gmail.com", "rigaumeddupe-7932@gmail.com", "juppepowufri-4547@gmail.com","houbeyotrofra-8116@gmail.com", "geffousauxose-4660@gmail.com","pettanneyecri-1592@gmail.com"];
  imagens = [ "1.jpeg", "7.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg"];
  // nifs = ["245671994","190759145","201489233","189257095","227346198","204098096","199902178"];

  random = Math.floor(Math.random() * 7); 
  //  nome = this.nomes[this.random];
  //  mail = this.email[this.random];
  //  nif = this.nifs[this.random];
  img = "../../assets/profile/" + this.imagens[this.random];
}
