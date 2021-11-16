import { Component, OnInit } from '@angular/core';
import { Firwanaa } from '../firwanaa';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  firwanaa: Firwanaa = {
    Atitle: 'Mobile Dev A3',
    sid: '000000000',
    sname: 'Alqassam',
    scampus: 'Davis',
    slogin: 'Firwanaa',
  };

  constructor() {}

  ngOnInit(): void {}
}
