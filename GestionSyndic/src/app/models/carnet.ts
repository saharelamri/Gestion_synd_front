import { Fournisseur } from '../models/fournisseur';

export class CarnetEntretien {
    codeCE : number;
    dateintervention : Date;
    cout : Float32Array;
    natureTravaux : String;
    Budgetprevsionnel : Float32Array;
     fournisseur :Fournisseur;
    CodeLot: number;
    CodeSyndic:number;
	
   //constructor(){};

   constructor(codeCE : number , dateintervention : Date, cout : Float32Array ,natureTravaux : String,Budgetprevsionnel : Float32Array,fournisseur:Fournisseur){

    this.codeCE = codeCE ;
    this.dateintervention = dateintervention;
    this.cout = cout  ;
    this.natureTravaux = natureTravaux;
    this.Budgetprevsionnel = Budgetprevsionnel;
    this.fournisseur=fournisseur;
   // this.CodeLot = CodeLot;
    //this.CodeSyndic = CodeSyndic;
        }   
        //getid
        getCodeCE()
        {
            return this.codeCE;
        }

        getFournisseur()
        {
            return this.fournisseur;
        }
}
