import { Component, OnInit } from '@angular/core';
import { ApiServiceService , Schedule} from 'src/app/api-service.service';

@Component({
  selector: 'app-vipcustome-view',
  templateUrl: './vipcustome-view.component.html',
  styleUrls: ['./vipcustome-view.component.css']
})
export class VipcustomeViewComponent implements OnInit {
  name: any;
  error: boolean = false;
  done: boolean = false;
  showAgendar : boolean = false;
  showConsultar : boolean = false;
  listBarbers:any = [];
  listTatooArtist:any = [];
  listServiceType:any = [];
  listBarbershop:any = [];
  listCuttype:any = [];
  listTatootype:any = [];
  listSchedule:any = [];
  schedule: Schedule={
    Bid: undefined,
    date: '',
    Time: '',
    ServiceType: undefined,
    Desc: '',
    typeId: undefined,
    FuncId: undefined,
  };
  id : any;
  nif : any;
  message: any = "";


  constructor(private _service: ApiServiceService) {

   }



  ngOnInit(): void {
    this.getAllBarberShop();
    this.getAllBarbers();
    this.getAllCutType();
    this.getAllServiceType();
    this.getAllTatooArtist();
    this.getAllTatooType();
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getVip();

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
    this._service.getAllbarbers().subscribe(res=>{ this.listBarbers = res});
  }

  getAllTatooArtist(): void{
    this._service.getAllTatooArtist().subscribe(res=>{ this.listTatooArtist = res});
  }

  getAllCutType(): void{
    this._service.getAllcuttype().subscribe(res=>{ this.listCuttype = res});
  }

  getAllServiceType(): void{
    this._service.getAllservicetype().subscribe(res=>{ this.listServiceType = res; 
    console.log(res);});
  }

  getAllTatooType(): void{
    this._service.getAlltatootype().subscribe(res=>{ this.listTatootype = res});
  }

  getVip(){
    this._service.getVip(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0][0].name,localStorage.setItem("nif",res[0][0].NIF)},err=>{});
    
  }

  getCurrentSchedule(){
      this.nif = localStorage.getItem("nif");
      this._service.getCurrentScheduleVip(this.nif).subscribe((res:any)=>{console.log(res),this.listSchedule=res[0]},err=>{});
  }

  makeschedule(){
    this.nif = localStorage.getItem("nif");
    this._service.make_scheduleVip(this.schedule,this.nif).subscribe((res:any)=>{
      this.message=res.message
    },err=>{this.error=true,this.name=""});
  }
  

  
}
