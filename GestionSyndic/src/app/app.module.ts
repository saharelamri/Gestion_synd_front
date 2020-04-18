import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowLotComponent } from './Composant/Lot/show-lot/show-lot.component';
import { AddLotComponent } from './Composant/Lot/add-lot/add-lot.component';
import { AddSyndicComponent } from './composant/Syndic/add-syndic/add-syndic.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowLotComponent,
    AddLotComponent,
    AddSyndicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
