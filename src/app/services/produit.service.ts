import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config/api.url'

@Injectable()
export class ProduitService {
  
  private PRODUITS: Produit[] = [];
  constructor(private http: HttpClient ) {
    let p1: Produit = new Produit(0,'mamadou cool',50, 25);
    let p2: Produit = new Produit(1,'mamadou gasama',75, 157);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
   }

   public getProduits() {
     //return this.http.get(API_URL.PRODUITS_URL);
     return this.PRODUITS;
   }

   public addProduit(produit: Produit): Observable<any> {
     return this.http.post(API_URL.PRODUITS_URL, produit) ;
   }

   public updateProduit(produit: Produit): Observable<any> {
     return this.http.put(API_URL.PRODUITS_URL, produit);
   }

   public deleteProdui(id:number): Observable<any> {
     return this.http.delete(API_URL.PRODUITS_URL+'/${id}');
   }
}
