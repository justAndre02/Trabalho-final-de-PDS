import { Component, OnInit } from '@angular/core';

declare function closeFullImg(): any;
declare function openFullImg(): any;


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  ngOnInit() {
    closeFullImg();
    openFullImg();
  }
}