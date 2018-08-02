import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  protected produits : Produit[];
  produitForm: FormGroup;

  constructor(public produitService: ProduitService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.getProduit();
  }

  createForm(){
    this.produitForm = this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prix:''     
    })
  }

  getProduit(){
    this.produitService.getProduits().subscribe(
      data => {this.produits = data},
      err=> { console.log(err) },
      () => { console.log('loading produits was done.')}
    );
  }

}
