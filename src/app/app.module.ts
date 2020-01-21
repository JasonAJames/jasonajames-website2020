import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { EducationComponent } from './views/education/education.component';
import { WorkExperienceComponent } from './views/work-experience/work-experience.component';
import { SkillsComponent } from './views/skills/skills.component';
import { VideoPortfolioComponent } from './views/video-portfolio/video-portfolio.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { VideoPortfolioPlayerComponent } from './components/video-portfolio-player/video-portfolio-player.component';
import { HomeContentComponent } from './components/page-content/home-content/home-content.component';
import { EducationContentComponent } from './components/page-content/education-content/education-content.component';
import { WorkExperienceContentComponent } from './components/page-content/work-experience-content/work-experience-content.component';
import { SkillsContentComponent } from './components/page-content/skills-content/skills-content.component';
import { VideoProductionContentComponent } from './components/page-content/video-production-content/video-production-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    VideoPortfolioComponent,
    SidebarNavComponent,
    VideoPortfolioPlayerComponent,
    HomeContentComponent,
    EducationContentComponent,
    WorkExperienceContentComponent,
    SkillsContentComponent,
    VideoProductionContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
