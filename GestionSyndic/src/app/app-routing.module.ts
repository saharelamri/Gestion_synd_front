import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowLotComponent } from './Composant/Lot/show-lot/show-lot.component';
import { AddLotComponent } from './Composant/Lot/add-lot/add-lot.component';
import { UpdateLotComponent } from './composant/Lot/update-lot/update-lot.component';
import { ShowFournisseurComponent } from './composant/Fournisseur/show-fournisseur/show-fournisseur.component';
import { AddFournisseurComponent } from './composant/Fournisseur/add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './composant/Fournisseur/update-fournisseur/update-fournisseur.component';
import { UpdateCarnetComponent } from './composant/CarnetEntretien/update-carnet/update-carnet.component';
import { AddCarnetComponent } from './composant/CarnetEntretien/add-carnet/add-carnet.component';
import { ShowCarnetComponent } from './composant/CarnetEntretien/show-carnet/show-carnet.component';
import { ShowSyndicComponent } from './composant/syndic/show-syndic/show-syndic.component';
import { AddSyndicComponent } from './composant/Syndic/add-syndic/add-syndic.component';
import { UpdateSyndicComponent } from './composant/syndic/update-syndic/update-syndic.component';


const routes: Routes = [
  {path:"addlot", component : AddLotComponent
  },
  { path:"showlot", component : ShowLotComponent},
  { path: 'update/:id', component: UpdateLotComponent },
 { path: "fournisseur" },
{ path: "fournisseurs/lister", component: ShowFournisseurComponent },
{ path: "fournisseurs/ajout", component: AddFournisseurComponent },
{ path: 'fournisseurs/update/:id', component: UpdateFournisseurComponent },
{ path: "carnet" },
{ path: "carnets/lister", component: ShowSyndicComponent },
{ path: "carnets/ajout", component: AddSyndicComponent },
{ path: 'carnets/update/:id', component: UpdateSyndicComponent },
{ path: "syndic" },
{ path: "syndics/lister", component: ShowCarnetComponent },
{ path: "syndics/ajout", component: AddCarnetComponent },
{ path: 'syndics/update/:id', component: UpdateCarnetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
