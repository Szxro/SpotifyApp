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

  ngOnInit() {
    //this.apiService.saveCode();
    //if (!localStorage.getItem('Code')) {
    //  return console.log('Error');
    //}
    //this.apiService.getAccessToken().subscribe((m) => console.log(m));
  }
}
