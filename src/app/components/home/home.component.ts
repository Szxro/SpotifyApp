import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _login: LoginService, private _helper: HelperService) {}

  ngOnInit(): void {
    //Checking if the code exists
    if (!localStorage.getItem('code')) {
      return;
    }
    //Making the post request
    this._login.getAccessToken().subscribe((e) => {
      this._helper.settingObject(e);
    });
  }
}
