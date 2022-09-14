import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-func-tatoo-artist-view',
  templateUrl: './func-tatoo-artist-view.component.html',
  styleUrls: ['./func-tatoo-artist-view.component.css']
})
export class FuncTatooArtistViewComponent implements OnInit {
  showConsultar : boolean = false;
  listSchedule:any = [];
  name:any;
  id : any;
  constructor(private _service: ApiServiceService) { }


  ngOnInit(): void {
    this.id = JSON.stringify(localStorage.getItem('Lid'));
    this.getTatooArtist();
    this.getCurrentSchedule();
  }

  getCurrentSchedule(){
    this._service.getCurrentScheduleTatooArtist(this.id).subscribe((res:any)=>{console.log(res),this.listSchedule=res},err=>{});
  }

  showschedulelist(): void{
    this.getCurrentSchedule();
    this.showConsultar = !this.showConsultar;
  }

  getTatooArtist(){
    console.log(this.id)
    this._service.getTatooArtist(this.id).subscribe((res:any)=>{console.log(res), this.name = res[0].name},err=>{});
  }
  

}
