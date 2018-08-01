import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor(protected router: Router) { }

  ngOnInit() {
  }

  sideBarChanged($event){                
    if (event.srcElement.textContent == "Produit" ) {      
      this.router.navigate(['produit']);
      //console.log(this.router.routerState );
    }
   //event.preventDefault();
  }

}
