import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}
  public authUrl: string = this.apiService.loginUrl;

  getUrlHash(): void {
    console.log(this.apiService.getUrl);
  }
}