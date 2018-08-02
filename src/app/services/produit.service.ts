import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config/api.url'

@Injectable()
export class ProduitService {
  
  private PRODUITS: Produit[] = [];
  constructor(private http: HttpClient ) {
    let p1: Produit = new Produit('Livre','mamadou cool',50, 25);
    let p2: Produit = new Produit('Livre','mamadou gasama',75, 157);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
   }

   public getProduits():Observable<any> {
     return this.http.get(API_URL.PRODUITS_URL);
   }
}
