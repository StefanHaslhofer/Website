import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./navbar/navbar.component";
import {ProjectComponent} from "./project/project.component";
import {PictureTextCardComponent} from "./picture-text-card/picture-text-card.component";
import {AboutComponent} from "./about/about.component";
import {PictureCardComponent} from "./picture-card/picture-card.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ContentCreditComponent} from "./content-credit/content-credit.component";
import {PhotoViewerComponent} from "./photo-viewer/photo-viewer.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {SafePipe} from "./safe.pipe";
import {MatLineModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {ContentFileService} from "./service/content-file.service";

@NgModule({
  declarations: [
    NavbarComponent,
    ProjectComponent,
    PictureTextCardComponent,
    AboutComponent,
    PictureCardComponent,
    ProjectDetailComponent,
    FooterComponent,
    ContentCreditComponent,
    PhotoViewerComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    RouterOutlet,
    MatListModule,
    MatLineModule,
    MatIconModule
  ],
  providers: [ContentFileService],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
