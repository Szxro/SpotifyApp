import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { authParams, authHeaders } from '../shared/objects';
import { Observable } from 'rxjs';
import { accessResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /*
    TODO:
    -Divide the project  
    -Make Routes(Login/Home/etc..)
    -Verify if the token and the expiredate is in the localstorage to redirect to some route(Guard)
    -Make an method when the token expires and make the user login again or get the refreshToken
    -Make a diferent service to login part, helper , etc..
    Note: The token expires in 3600s in minutes is 60 min
  */

  //Get the AuthUri
  get loginUrl(): string {
    return `${environment.authEndPoint}?client_id=${
      environment.clientId
    }&redirect_uri=${environment.redirectUri}&scope=${environment.scopes.join(
      '%20'
    )}&response_type=code&show_dialog=false`;
  }

  // get getUserDetails() {
  //   return window.location.hash
  //     .substring(1)
  //     .split('&')
  //     .reduce((initial: { [key: string]: string }, item) => {
  //       let result = item.split('=');
  //       initial[result[0]] = decodeURIComponent(result[1]);
  //       return initial;
  //     }, {});
  // }

  constructor(
    private _activateRouted: ActivatedRoute,
    private _http: HttpClient
  ) {}

  saveCode() {
    this._activateRouted.queryParams.subscribe((item) => {
      if (item['code'] == undefined) {
        return '';
      }
      localStorage.setItem('Code', item['code']);
      return '';
    });
  }

  getAccessToken(): Observable<accessResult> {
    const httpOptions = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const params = this.paramsAndHeadersGenerator(authParams, false);

    return this._http.post<accessResult>(
      'https://accounts.spotify.com/api/token',
      params,
      {
        headers: httpOptions,
      }
    );
  }
  //updateRefreshToken
  swapRefreshToken() {}

  //HelperService.ts
  paramsAndHeadersGenerator(
    arr: { key: string; value: string }[],
    header: boolean
  ) {
    if (!header) {
      return arr.reduce((initial, item) => {
        initial = initial.set(item.key, item.value);
        return initial;
      }, new HttpParams());
    }

    return arr.reduce((initial, item) => {
      initial = initial.set(item.key, item.value);
      return initial;
    }, new HttpHeaders());
  }
}
