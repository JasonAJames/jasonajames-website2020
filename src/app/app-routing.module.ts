import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EducationComponent } from './views/education/education.component';
import { WorkExperienceComponent } from './views/work-experience/work-experience.component';
import { SkillsComponent } from './views/skills/skills.component';
import { VideoPortfolioComponent } from './views/video-portfolio/video-portfolio.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'work-experience',
    component: WorkExperienceComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'video-portfolio',
    component: VideoPortfolioComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
