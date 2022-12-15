import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clientCredentials, redirectUris } from 'src/environments/environment';
import { accessResult, swapRefreshToken } from '../interfaces/interfaces';
import { authParams, paramsRefreshToken, authHeaders } from '../shared/objects';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //Authorization Url
  get authorizationUrl() {
    return `${redirectUris.authEndPoint}?client_id=${
      clientCredentials.clientId
    }&redirect_uri=${
      redirectUris.redirectUri
    }&scope=${clientCredentials.scopes.join(
      '%20'
    )}&response_type=code&show_dialog=false`;
  }
  constructor(private _http: HttpClient, private _helper: HelperService) {}

  //Getting the refresh tokens and access token
  getAccessToken(): Observable<accessResult> {
    const headers = this._helper.headerGenerator(authHeaders);
    const params = this._helper
      .paramsGenerator(authParams)
      .set('code', localStorage.getItem('code')!);
    //the code is save but in the object dont exist

    return this._http.post<accessResult>(redirectUris.authToken, params, {
      headers: headers,
    });
  }

  //Update the refresh toke
  swapRefreshToken(): Observable<swapRefreshToken> {
    const headers = this._helper.headerGenerator(authHeaders);

    const params = this._helper.paramsGenerator(paramsRefreshToken);
    return this._http.post<swapRefreshToken>(redirectUris.authToken, params, {
      headers: headers,
    });
  }
}

/*
Note:
- The Access Token expired in 3600 seg = 1hr
*/
