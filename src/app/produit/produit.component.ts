import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  protected produits : Produit[];
  produitForm: FormGroup;
  operation: string = 'add';
  protected selectProduit: Produit;

  constructor(public produitService: ProduitService, private fb: FormBuilder, private activedRoute: ActivatedRoute) { 
    this.createForm();
  }

  ngOnInit() {
    this.initProduit();
    this.produits = this.activedRoute.snapshot.data.produits;
  }

  createForm(){
    this.produitForm = this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prix:''     
    })
  }

  getProduits(){
   return this.produitService.getProduits();
    /*this.produitService.getProduits().subscribe(
      data => {this.produits = data},
      err=> { console.log(err) },
      () => { console.log('loading produits was done.')}
    ); */
  }

  public ajouterProduit(){        
    this.produits.push(this.produitForm.value);
    this.initProduit();
  }

  editProduit(prod: Produit){
    console.log("edit");
    this.initProduit();
  }

  deleteProduit(id: number){
    /*Avec prod comme param de la fonction
    console.log(this.produits.indexOf(prod));
    this.produits.splice(this.produits.indexOf(prod),1); 
    this.selectProduit = new Produit(); 
    this.operation = 'add';
    */
    //this.selectProduit.splice()
    /*this.produitService.deleteProdui(this.selectProduit.getId())
    .subscribe(
      res => {
        this.selectProduit = new Produit();
        this.getProduits();
      }
    )*/
  }

  initProduit(){
    this.selectProduit = new Produit();
    this.createForm();
  }
}
