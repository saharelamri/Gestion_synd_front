import { Component, OnInit } from '@angular/core';
import { FournisseursService } from 'src/app/service/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-fournisseur',
  templateUrl: './show-fournisseur.component.html',
  styleUrls: ['./show-fournisseur.component.css']
})
export class ShowFournisseurComponent implements OnInit {

    fournisseurList =[];
    fournisseurs = [];
    mot_cle : String ="";
  
    constructor(private fournisseurService : FournisseursService, private router:Router) { }
  
    ngOnInit(): void {
      
      this.fournisseurService.getFournisseurList().subscribe(
        result => {
          this.fournisseurList=result;
          this.fournisseurs=result;
        },err=>console.error(err)
      )
    }
  
    Onchercher(form:any)
      {
        this.mot_cle=form.mot_cle;
        this.fournisseurList=this.fournisseurs;
        {
          if(this.mot_cle!="")
          {
            this.fournisseurList=this.fournisseurList.filter(x=>x.NomS==form.mot_cle);
          }
          else
          this.fournisseurList=this.fournisseurs;
        }
      }
      onDeleteFournisseur(id:number)
      {
        let conf=confirm("Etes vous sur de supprimer cet fournisseur ?? ");
        if(conf)
        this.fournisseurService.deleteFournisseur(id).subscribe(data=>{
          this.fournisseurService.getFournisseurList();
          window.location.reload();
  
        },err=>{console.log(err);})
        //this.router.navigateByUrl("fournisseurs/lister");
       // window.location.reload();
      }
      
      onEditFournisseur(id:number)
      {
        this.router.navigateByUrl("fournisseurs/update/"+id);
      }
  
     
  
  }
  
