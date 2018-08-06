import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHideSideBar:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  OnShowSideBarChanged(showSideBar){
    this.showHideSideBar = showSideBar;
    console.log(this.showHideSideBar);
  }

  OnShowSideBarChanged2(showSideBar){
    this.showHideSideBar = showSideBar;
    console.log("2"+this.showHideSideBar);
  }
  
}
