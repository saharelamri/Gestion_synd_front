import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseursService } from 'src/app/service/fournisseur.service';
@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  id : number;
  fournisseur1: any;
  
  constructor(private route:ActivatedRoute, private router: Router ,private fournisseurService : FournisseursService) { }

  ngOnInit() {
    this.ongetFournisseur();
  }


  ongetFournisseur(){
  
this.fournisseurService.getFournisseur(this.route.snapshot.params.id)
  .subscribe(data=>
    this.fournisseur1=data
  )}


 onupdateFournisseur(value:any){
    
let fournisseur:Fournisseur = new Fournisseur(this.route.snapshot.params.id,value.nomF,value.contactF,value.adrF,value.emailF,value.siteWebF);
 
   this.fournisseurService.updateFournisseur(this.route.snapshot.params.id,fournisseur).subscribe(data=>
      this.router.navigateByUrl("/fournisseurs/lister"))}

   }
