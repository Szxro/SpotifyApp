import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { LoginService } from 'src/app/services/login.service';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authUrl: string = this._login.authorizationUrl;

  constructor(
    private _login: LoginService,
    private _helper: HelperService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // Saving the code
    this._helper.saveCode();
    // Checking if the item exists
    if (!localStorage.getItem('code')) {
      return console.log('No code provided');
    }
    // Changing route (Home)
    this._router.navigateByUrl('/home');
  }
}
