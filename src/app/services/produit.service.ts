import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitService {
  
  private PRODUITS: Produit[] = [];
  constructor() {
    let p1: Produit = new Produit('Livre','mamadou cool',50, 25);
    let p2: Produit = new Produit('Livre','mamadou gasama',75, 157);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
   }

   public getProduits(){
     return this.PRODUITS;
   }
}
