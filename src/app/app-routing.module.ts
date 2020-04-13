import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckconstructComponent } from './deckconstruct/deckconstruct.component';
import { DeckdisplayComponent } from './deckdisplay/deckdisplay.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'deckconstruct', component: DeckconstructComponent},
  { path: 'deckdisplay', component: DeckdisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
