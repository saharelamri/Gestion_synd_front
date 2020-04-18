export class Lot {
    CodeLot : number;
    
	  Batiment : string ;
	  Porte : number;
      Surface : string;
      Etage : number;
	  Nbre_pieces : number ;
	  Commentaires : string ;
      Enum Type {
        Appartement="Appartement",
        "Garage",
        "Parking",
        "Cave",
        "Bureau",
        "Local_commercial",
        "Jardin"};
     
     
	
}
