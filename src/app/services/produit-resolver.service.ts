import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProduitService } from './produit.service';

@Injectable()
export class ProduitResolverService implements Resolve<any> {

  constructor(private produitService: ProduitService) { }

  resolve(){
    //nous permet d'éviter d'avoir une page blanche avant le chargement des datas
    return this.produitService.getProduits();
  }

}
