import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompetitionComponent } from './archive/about-competition/about-competition.component';
import { CompetitionRegulationsComponent } from './competition-regulations/competition-regulations.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'competition-regulations',
    component: CompetitionRegulationsComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  { path: 'about-competition/:id', component: AboutCompetitionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
