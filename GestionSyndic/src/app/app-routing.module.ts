import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowLotComponent } from './Composant/Lot/show-lot/show-lot.component';
import { AddLotComponent } from './Composant/Lot/add-lot/add-lot.component';


const routes: Routes = [
  {path:"addlot", component : AddLotComponent
  },
  {
    path:"showlot", component : ShowLotComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
