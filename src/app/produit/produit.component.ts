import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  protected produits : Produit[];
  constructor(public produitService: ProduitService) { }

  ngOnInit() {
    this.produits = this.produitService.getProduits();
  }

}
