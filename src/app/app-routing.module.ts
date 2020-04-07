import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ResumeComponent } from './containers/resume/resume.component';
import { AboutComponent } from './containers/about/about.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { title: 'Resume' }
  },
  {
    path: 'portfolio',
    component: ResumeComponent,
    data: { title: 'Portfolio' }
  },
  {
    path: 'blog',
    component: ResumeComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'contact',
    component: ResumeComponent,
    data: { title: 'Contact' }
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
