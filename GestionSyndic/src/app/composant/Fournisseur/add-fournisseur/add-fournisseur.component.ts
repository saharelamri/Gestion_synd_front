import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseursService } from 'src/app/service/fournisseur.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {
// constructor() { }

public currentFournisseur:any;
mode:number=1;
id:number;
constructor(private fournisseursService : FournisseursService, private router : Router ) { }

ngOnInit(): void {
}

OnsaveFournisseur(data:Fournisseur){
  this.fournisseursService.createFournisseur(data).subscribe(res=>{
    this.currentFournisseur=res
    this.mode=2;
    this.gotolist();
    }
    ,err=>{console.log(err);
   })

 } 
gotolist(){
 this.router.navigateByUrl("fournisseurs/lister");
}
/*OngetCurrentFournisseur(id: number){
 id==this.currentFournisseur.getIdF();
 // if(this.mode=2)
 this.fournisseursService.getFournisseur(id).subscribe(res=>{
   this.currentFournisseur=res;
   })
}*/
OnewFournisseur(){
  this.mode=1;
}


}

