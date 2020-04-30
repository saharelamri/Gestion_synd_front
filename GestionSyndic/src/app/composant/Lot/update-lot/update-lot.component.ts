import { Component, OnInit } from '@angular/core';
import { Lot } from 'src/app/models/lot';
import { ActivatedRoute, Router } from '@angular/router';
import { LotService } from 'src/app/service/lot.service';

@Component({
  selector: 'app-update-lot',
  templateUrl: './update-lot.component.html',
  styleUrls: ['./update-lot.component.css']
})
export class UpdateLotComponent implements OnInit {
  id : number;
  lot1: any;
  
  constructor(private route:ActivatedRoute, private router: Router ,private lotService : LotService) { }

  ngOnInit() {
    this.ongetLot();
  }


ongetLot(){
  
this.lotService.getLot(this.route.snapshot.params.id)
  .subscribe(data=>
   this.lot1=data
  )}


 onupdateLot(value:any){
    
let lot:Lot ;
lot = new Lot(this.route.snapshot.params.id,value.batiment,value.surface,value.etage,value.porte,value.nbre_pieces,value.commentaires,value.type);
 
   this.lotService.updateLot(this.route.snapshot.params.id,lot).subscribe(data=>{
    console.log(data);
   this.router.navigateByUrl("/showlot")
    //console.log(this.lot1)
  })
    }
   }
          

      
  


   
















    /*this.lot = new Lot();
    this.id = this.route.snapshot.params['id'];
    this.lotService.getLot(this.id);
  }
  onupdateLot() {
    this.lotService.updateLot(this.id, this.lot)
      .subscribe(data => console.log(data), error => console.log(error));
    this.lot = new Lot();
    this.gotoList();
  }

  onSubmit() {
    this.onupdateLot();    
  }

  gotoList() {
    this.router.navigate(['/showlot']);
  }
*/

