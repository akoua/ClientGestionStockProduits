import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './services/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';  
  
  constructor(private appService: AppServiceService, private route: Router){

  }

  ngOnInit(){    
    if (!this.appService.authenticated) {
        //pour la redirection en cas de non connexion
      this.route.navigateByUrl("/login");
      console.log("je suis passé");
    }else{
      this.route.navigateByUrl("/home");
      console.log("je suis passé2");
    }
  }
  
 
}

