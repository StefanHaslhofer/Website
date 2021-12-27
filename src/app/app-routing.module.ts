import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './project/project.component';
import {AboutComponent} from './about/about.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
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
      {path: '', redirectTo: 'about', pathMatch: 'full'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
