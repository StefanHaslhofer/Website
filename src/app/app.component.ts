import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppModule} from "./app.module";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'website';
}
