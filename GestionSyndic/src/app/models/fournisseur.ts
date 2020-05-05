export class Fournisseur {
    idF : number;
    nomF : String;
    contactF : String ;
    adrF : String;
    emailF : String;
    siteWebF : String;

   //constructor(){};

   constructor(idF : number , nomF : String, contactF : String ,adrF : String,emailF : String, siteWebF : String){

    this.idF = idF ;
    this.nomF = nomF;
    this.contactF = contactF  ;
    this.adrF = adrF;
    this.emailF = emailF;
    this.siteWebF = siteWebF;
        }   
        //getid
        getIdF()
        {
            return this.idF;
        }

}
