import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  //pas vraiment besoin d'initialiser un input
  
  showSideBar2:boolean = false;
  @Output()
  showSideBarChanged2: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  sideBarChanged(){      
    
    //this.showSideBar2 = false;
    this.showSideBarChanged2.emit(this.showSideBar2);
    console.log("sidebar:"+this.showSideBar2 );

    if (event.srcElement.textContent == "Produit" ) {      
      //this.router.navigate(['produit']);
      //console.log(this.router.routerState );
    }
    else if (event.srcElement.textContent == "Dashboard" ) {      
      //this.router.navigate([{ outlets: {contentOultet:'dashboard'} } ]);
      //console.log(this.router.routerState );
    }
   
    //event.preventDefault();   
  }

}
