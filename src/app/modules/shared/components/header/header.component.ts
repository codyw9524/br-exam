import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  mapIcon: string;

  constructor() { }

  ngOnInit() {
    this.title = `Lunch Tyme`;
    this.mapIcon = '../../../../../assets/icons/icon_map@2x.png';
  }

}
