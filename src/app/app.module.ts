import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CompetitionRegulationsComponent } from './content/competition-regulations/competition-regulations.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './content/home/home.component';
import { AppRoutingModule } from './content/app-routing.module';
import { AboutProjectComponent } from './content/about-project/about-project.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ApplyCompetitionFormComponent } from './content/apply-competition-form/apply-competition-form.component';
import { ContactComponent } from './content/contact/contact.component';
import { ArchiveComponent } from './content/archive/archive.component';
import { MatCardModule } from '@angular/material/card';
import { AboutCompetitionComponent } from './content/archive/about-competition/about-competition.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CardLaureatComponent } from './content/archive/about-competition/card-laureat/card-laureat.component';
import { TeamComponent } from './content/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompetitionRegulationsComponent,
    HomeComponent,
    AboutProjectComponent,
    ApplyCompetitionFormComponent,
    ContactComponent,
    ArchiveComponent,
    AboutCompetitionComponent,
    CardLaureatComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CdkMenuModule,
    MatCardModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
