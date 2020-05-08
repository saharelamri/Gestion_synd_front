import { Component, OnInit } from '@angular/core';
import { SyndicService } from 'src/app/service/synidc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-syndic',
  templateUrl: './show-syndic.component.html',
  styleUrls: ['./show-syndic.component.css']
})
export class ShowSyndicComponent implements OnInit {
  syndicList =[];
  syndics = [];
  mot_cle : String ="";

  constructor(private syndicService : SyndicService, private router:Router) { }

  ngOnInit(): void {
    
    this.syndicService.getSyndicList().subscribe(
      result => {
        this.syndicList=result;
        this.syndics=result;
      },err=>console.error(err)
    )
  }

  Onchercher(form:any)
    {
      this.mot_cle=form.mot_cle;
      this.syndicList=this.syndics;
      {
        if(this.mot_cle!="")
        {
          this.syndicList=this.syndicList.filter(x=>x.NomS==form.mot_cle);
        }
        else
        this.syndicList=this.syndics;
      }
    }
    onDeleteSyndic(id:number)
    {
      let conf=confirm("Etes vous sur de supprimer ce syndic ?? ");
      if(conf)
      this.syndicService.deleteSyndic(id).subscribe(data=>{
        this.syndicService.getSyndicList();
      },err=>{console.log(err);})
    }
    onEditSyndic(id:number)
    {
      this.router.navigateByUrl("/updatesyndic/"+id);
    }

}