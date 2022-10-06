import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    role: string = 'Full Stack Python Jr.';
    date1: string = 'mar - jul 2022';
    address1: string = 'Ciudad Autónoma de Buenos Aires (Argentina )';
    studies: string = 'Universidad Central de Venezuela (UCV)';
    date2: string =  'jun 2004 - jul 2010';
    address2: string = 'Caracas, Distrito Capital - Venezuela';

}
