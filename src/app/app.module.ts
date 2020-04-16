import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckdisplayComponent } from './deckdisplay/deckdisplay.component';
import { DeckconstructComponent } from './deckconstruct/deckconstruct.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DeckdisplayComponent,
    DeckconstructComponent,
    HomeComponent,
    NavbarComponent,
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
