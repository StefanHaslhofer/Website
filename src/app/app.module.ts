import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatToolbarModule} from '@angular/material';
import {ProjectComponent} from './project/project.component';
import {ContentCardComponent} from './content-card/content-card.component';
import {AboutComponent} from './about/about.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectComponent,
    ContentCardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
