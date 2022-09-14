import { Component, OnInit } from '@angular/core';
import { ApiServiceService, Schedule } from 'src/app/api-service.service';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  name: any;
  nif: any;
  message: any = "";
  done: boolean = false;
  error: boolean = false;
  showAgendar : boolean = false;
  showConsultar : boolean = false;
  listBarbers:any = [];
  listTatooArtist:any = [];
  listServiceType:any = [];
  listBarbershop:any = [];
  listCuttype:any = [];
  listTatootype:any = [];
  listSchedule:any = [];
  counter = 1;
  schedule: Schedule={
    Bid: undefined,
    date: '',
    Time: '',
    ServiceType: undefined,
    Desc: '',
    typeId: undefined,
    FuncId: undefined,
  };

  constructor(private _service: ApiServiceService) { }

  Barbershop : any 
  ngOnInit(): void {
    this.getAllBarberShop();
    this.getAllBarbers();
    this.getAllCutType();
    this.getAllServiceType();
    this.getAllTatooArtist();
    this.getAllTatooType();
    //this.getCustomer();
    this.name = JSON.stringify(localStorage.getItem('name')).slice(1,-1);
    this.nif = JSON.stringify(localStorage.getItem('nif'));
  }

  showschedule(): void{
    if (this.showConsultar != true) this.showAgendar = !this.showAgendar;
    this.done = false;
    this.error = false;
  }

  showschedulelist(): void{
    this.getCurrentSchedule();
    if (this.showAgendar != true) this.showConsultar = !this.showConsultar;
  }

  getAllBarberShop(): void{
    this._service.getAllbarbershop().subscribe(res=>{ this.listBarbershop = res;
      console.log(res);});
  }

  getAllBarbers(): void{
    this._service.getAllbarbers().subscribe(res=>{ console.log(res),this.listBarbers = res});
  }

  getAllTatooArtist(): void{
    this._service.getAllTatooArtist().subscribe(res=>{ console.log(res),this.listTatooArtist = res});
  }

  getAllCutType(): void{
    this._service.getAllcuttype().subscribe(res=>{ console.log(res),this.listCuttype = res});
  }

  getAllServiceType(): void{
    this._service.getAllservicetype().subscribe(res=>{ console.log(res),this.listServiceType = res; 
    console.log(res);});
  }

  getAllTatooType(): void{
    this._service.getAlltatootype().subscribe(res=>{ console.log(res),this.listTatootype = res});
  }


  getCurrentSchedule(){
    this._service.getCurrentScheduleCustomer(this.nif).subscribe((res:any)=>{console.log(res),this.listSchedule=res},err=>{});
  }

  makeschedule(){
    this._service.make_scheduleCustomer(this.schedule,this.nif).subscribe((res:any)=>{
      this.message=res.message},err=>{this.error=true,this.message=""});
  }


}
