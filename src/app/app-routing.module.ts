import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckconstructComponent } from './deckconstruct/deckconstruct.component';
import { DeckdisplayComponent } from './deckdisplay/deckdisplay.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'deckconstruct', component: DeckconstructComponent},
  { path: 'deckdisplay', component: DeckdisplayComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
