import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompetitionComponent } from './archive/about-competition/about-competition.component';
import { CompetitionRequlationsComponent } from './competition-requlations/competition-requlations.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'competition-requlations',
    component: CompetitionRequlationsComponent,
  },
  { path: 'about-competition/:id', component: AboutCompetitionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
