import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarnetEntretien} from 'src/app/models/carnet-entretien';
import { CarnetsService } from 'src/app/service/carnet-entretien.service';
import { Fournisseur } from 'src/app/models/fournisseur';

@Component({
  selector: 'app-update-carnet',
  templateUrl: './update-carnet.component.html',
  styleUrls: ['./update-carnet.component.css']
})
export class UpdateCarnetComponent implements OnInit {

  id : number;
  carnet: any;
  listeFournisseurId= [];
  fournisseur:Fournisseur;
  
  constructor(private route:ActivatedRoute, private router: Router ,private carnetsService : CarnetsService) { }

  ngOnInit() {
    this.ongetCarnet();
  }

  ongetFournisseurId(){
  
    this.carnetsService.getFournisseurListId()
      .subscribe(data=>
        this.listeFournisseurId=data
      )
    ,err=>{console.log(err);}
    console.log(this.listeFournisseurId);
    }
    
  ongetCarnet(){
  
this.carnetsService.getCarnetEntretien(this.route.snapshot.params.id)
  .subscribe(data=>
    this.carnet=data
  )}

 onupdateCarnet(value:any){
    
let carnet:CarnetEntretien = new CarnetEntretien(this.route.snapshot.params.id,value.dateIntervention,value.cout,value.natureTravaux,value.Budgetprevsionnel,value.fournisseur);
 
   this.carnetsService.updateCarnetEntretien(this.route.snapshot.params.id,this.carnet).subscribe(data=>
      this.router.navigateByUrl("/carnets/lister"))}


}
