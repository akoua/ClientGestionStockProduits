import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitService } from './services/produit.service';
import { Produit } from './shared/produit';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
