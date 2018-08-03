export class Produit{
    constructor(protected id?:number,
                protected ref?:string,                
                protected quantite?:number,
                protected prix?:number){
                }

    setId(id: number){
        this.id = id;
    }        
    setRef(ref:string){
        this.ref = ref;
    }
    setQuantite(q: number){
        this.quantite = q;
    }
    setPrix(p: number){
        this.prix = p;
    }

    getId(){
        return this.id;
    }
    getRef(){
        return this.ref;
    }
    getQuantite(){
        return this.quantite;
    }
    getPrix(){
        return this.prix;
    }
}