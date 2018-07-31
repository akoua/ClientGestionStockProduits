import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showHideSideBar:boolean = false;

  OnShowSideBarChanged(showSideBar){
    this.showHideSideBar = showSideBar;
  }
}

