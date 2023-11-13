import {Routes} from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {AboutComponent} from "./about/about.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'projects/:name',
    component: ProjectDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:name',
    component: ProjectDetailComponent
  },
  {path: '', redirectTo: 'about', pathMatch: 'full'},
];
