import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stack = [
    'Angular 9',
    'Material',
    'Json-Service'
  ];

  constructor(private _headerService: HeaderService) {
    _headerService.headerData = {
      title: 'Início',
      icone: 'home',
      routeUrl: '/'
    }
   }

  ngOnInit() {
  }

}
