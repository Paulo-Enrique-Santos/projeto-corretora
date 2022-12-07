import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isOpenSidebar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebar(): void {
    this.isOpenSidebar = this.isOpenSidebar ? false : true;
  }
}
