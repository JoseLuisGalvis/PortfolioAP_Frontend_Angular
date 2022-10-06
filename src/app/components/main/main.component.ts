import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  template: `
    <h3>{{name}}</h3>
      <p>{{role}}</p>
      <p>{{address}}</p>
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = 'José Luis Galvis Escobar';
  role: string = 'Full Stack Developer Jr.';
  address: string = 'Ciudad Autónoma de Buenos Aires (Argentina)';

}
