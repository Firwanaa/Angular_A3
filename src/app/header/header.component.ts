import { Component, OnInit } from '@angular/core';
import { Firwanaa } from '../firwanaa';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  firwanaa: Firwanaa = {
    Atitle: 'Mobile Dev A3',
    sid: '90000000',
    sname: Natoshi',
    scampus: 'Davis',
    slogin: 'Albatata',
  };
  constructor() {}

  ngOnInit(): void {}
}
