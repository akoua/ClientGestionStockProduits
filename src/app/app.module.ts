import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitService } from './services/produit.service';
import { Produit } from './shared/produit';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

import {  AppRoutingModule } from './app.routing.module'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppServiceService } from './services/app-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProduitService, AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
