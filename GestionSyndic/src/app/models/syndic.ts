export class Syndic {

    CodeSyndic : number;
    CiviliteS : String;
    NomS : String ;
    PrenomS : String;
    dateNaissanceS : Date;
    EmailS : String;
    NumtelS : number;
    AdresseS : String ;
    Role : String ;

    //constructor(){};

    constructor(codeSyndic : number , civiliteS : String, nomS : String ,prenomS : String,DateNaissanceS : Date, emailS : String, numtelS : number, adresseS : String ,role : String ){

        this.CodeSyndic = codeSyndic ;
        this.CiviliteS = civiliteS;
        this.NomS = nomS  ;
        this.PrenomS = prenomS;
        this.dateNaissanceS = DateNaissanceS;
        this.EmailS = emailS;
        this.NumtelS = numtelS;
        this.AdresseS = adresseS ;
        this.Role = role ;
    }   

    
}

      
