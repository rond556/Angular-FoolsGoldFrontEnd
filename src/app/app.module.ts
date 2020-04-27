import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckdisplayComponent } from './deckdisplay/deckdisplay.component';
import { DeckconstructComponent } from './deckconstruct/deckconstruct.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HealthdeckComponent } from './healthdeck/healthdeck.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckdisplayComponent,
    DeckconstructComponent,
    FooterComponent,
    HealthdeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
