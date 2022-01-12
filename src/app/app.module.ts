import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {ProjectComponent} from './project/project.component';
import {PictureTextCardComponent} from './picture-text-card/picture-text-card.component';
import {AboutComponent} from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {PictureCardComponent} from './picture-card/picture-card.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {environment} from '../environments/environment';
import {NgxsModule} from '@ngxs/store';
import {ProjectDetailState} from './state/project-detail.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectComponent,
    PictureTextCardComponent,
    AboutComponent,
    PictureCardComponent,
    ProjectDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    NgxsModule.forRoot([ProjectDetailState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      stateSanitizer: (state) => {
        return {
          ...state
        };
      }
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'projectDetail'
    }),
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
