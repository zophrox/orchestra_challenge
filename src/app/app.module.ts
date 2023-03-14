import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CompetitionRequlationsComponent } from './content/competition-requlations/competition-requlations.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './content/home/home.component';
import { AppRoutingModule } from './content/app-routing.module';
import { AboutProjectComponent } from './content/about-project/about-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompetitionRequlationsComponent,
    HomeComponent,
    AboutProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
