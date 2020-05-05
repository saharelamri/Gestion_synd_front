import { Component, OnInit } from '@angular/core';
import { CarnetsService } from 'src/app/service/carnet-entretien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-carnet',
  templateUrl: './show-carnet.component.html',
  styleUrls: ['./show-carnet.component.css']
})
export class ShowCarnetComponent implements OnInit {

  carnetList =[];
  carnets = [];
  mot_cle : String ="";

  constructor(private fournisseurService : CarnetsService, private router:Router) { }

  ngOnInit(): void {
    
    this.fournisseurService.getCarnetEntretienList().subscribe(
      result => {
        this.carnetList=result;
        this.carnets=result;
      },err=>console.error(err)
    )
  }

  Onchercher(form:any)
    {
      this.mot_cle=form.mot_cle;
      this.carnetList=this.carnets;
      {
        if(this.mot_cle!="")
        {
          this.carnetList=this.carnetList.filter(x=>x.NomS==form.mot_cle);
        }
        else
        this.carnetList=this.carnets;
      }
    }
    onDeleteCarnet(id:number)
    {
      let conf=confirm("Etes vous sur de supprimer cet carnet d'entretien ?? ");
      if(conf)
      this.fournisseurService.deleteCarnetEntretien(id).subscribe(data=>{
        this.fournisseurService.getCarnetEntretienList();
        window.location.reload();

      },err=>{console.log(err);})
      //this.router.navigateByUrl("carnets/lister");
     // window.location.reload();
    }
    
    onEditCarnet(id:number)
    {
      this.router.navigateByUrl("carnets/update/"+id);
    }
}
