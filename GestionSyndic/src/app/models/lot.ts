export class Lot {
    codeLot : number;
    batiment : string ;
    porte : number;
    surface : string;
    type : String;
    etage : number;
	  nbre_pieces : number ;
	  commentaires : string ;
      
   constructor (CodeLot: number,
      Batiment: string,
	  Porte : number,
    Surface : string,
    Etage : number,
	  Nbre_pieces : number ,
    Commentaires : string ,
    Type : String )
    {
        this.codeLot = CodeLot;
        this.type=Type;
        this.batiment=Batiment;
        this.porte=Porte;
        this.surface=Surface;
        this.etage=Etage;
        this.nbre_pieces=Nbre_pieces;
        this.commentaires=Commentaires;
        

    }
    /*constructor(){
        
    }*/
   
    
	
}
