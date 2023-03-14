
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionRequlationsComponent } from './competition-requlations/competition-requlations.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'competition', component: CompetitionRequlationsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
