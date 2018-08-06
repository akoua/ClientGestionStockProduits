import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials= {
    username:'',
    password:''
  };

  constructor(private fb: FormBuilder, private route: Router,
              private appService: AppServiceService ) {
    this.createForm();
   }

  ngOnInit() {    
  }

  createForm(){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    console.log("test");
    this.appService.authenticate(this.credentials,()=>{
      if (this.appService.authenticated) {
        this.route.navigateByUrl("/home"); 
      }else{
        this.loginForm.reset();
      }    
    });
  }
}
