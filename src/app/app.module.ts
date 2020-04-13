import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckdisplayComponent } from './deckdisplay/deckdisplay.component';
import { DeckconstructComponent } from './deckconstruct/deckconstruct.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckdisplayComponent,
    DeckconstructComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
