import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-func-view',
  templateUrl: './func-view.component.html',
  styleUrls: ['./func-view.component.css']
})
export class FuncViewComponent implements OnInit {

  showConsultar : boolean = false;
  listSchedule:any = [];
  name:any;
  id : any;
  constructor(private _service: ApiServiceService) { }


  ngOnInit(): void {
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getBarber();
    this.getCurrentSchedule();
  }

  getCurrentSchedule(){
    this._service.getCurrentScheduleBarber(this.id).subscribe((res:any)=>{
      console.log(res);
      this.listSchedule=res;
    },err=>{});
    console.log("Efetuado com sucesso");
  }
  
  showschedulelist(): void{
    this.getCurrentSchedule();
    this.showConsultar = !this.showConsultar;
  }

  getBarber(){
    this._service.getBarber(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0].name},err=>{});
  }
}
