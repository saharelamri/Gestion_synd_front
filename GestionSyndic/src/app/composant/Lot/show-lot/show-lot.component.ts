import { Component, OnInit } from '@angular/core';
import { Lot } from 'src/app/models/lot';
import { Observable } from 'rxjs';
import { LotService } from 'src/app/service/lot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-lot',
  templateUrl: './show-lot.component.html',
  styleUrls: ['./show-lot.component.css']
})
export class ShowLotComponent implements OnInit {
public lot : Lot[];
public lots: Lot[];
  


  constructor(private Lotservice: LotService, private router:Router) { }

  ngOnInit() {
this.reloadData();
  }
reloadData(){
  this.Lotservice.getLotList().subscribe(data=>{
    this.lot=data;
    this.lots=data;
    console.log(data);
   } , err=>{console.log(err)
  })
}
/*deleteLot(id:number){
  this.Lotservice.deleteLot(id).subscribe(data=>
    {
      console.log(data);
      this.reloadData();
    },
    error=>console.log(error)
    );
}
updateLot(id:number){
  this.Lotservice.updateLot(id,)
}*/onDeletelot(id:number)
{
    
let conf=confirm("Etes vous sur de supprimer ce lot ?? ");
      if(conf)
      this.Lotservice.deleteLot(id).subscribe(data=>{
        this.reloadData();
        //this.gotoList();
        window.location.reload();
      },err=>{console.log(err);})
    }
   /* gotoList(){
      this.router.navigate(['/showlot']);
    }*/
    onUpdateLot(id:number)
    {
      this.router.navigateByUrl("/update/"+id);
    }
}
