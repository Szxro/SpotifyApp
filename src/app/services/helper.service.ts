import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { accessResult, getHeadersAndParams } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  /*
    TODO:
    -Verify if the token and the expiredate is in the localstorage to redirect to some route(Guard)
    -Make an method when the token expires and make the user login again or get the refreshToken
  */

  constructor(private _activateRoute: ActivatedRoute) {}

  //Params and Headers Generator
  paramsGenerator(arr: getHeadersAndParams[]) {
    return arr.reduce((initial, item) => {
      initial = initial.set(item.key, item.value);
      return initial;
    }, new HttpParams());
  }

  headerGenerator(arr: getHeadersAndParams[]): HttpHeaders {
    return arr.reduce((initial, item) => {
      initial = initial.set(item.key, item.value);
      return initial;
    }, new HttpHeaders());
  }

  //Saving the code
  saveCode(): void {
    this._activateRoute.queryParams.subscribe((item) => {
      if (item['code'] == '' || undefined) {
        return console.log('Blank code');
      }
      if (!item['code']) {
        return console.log('No code detected');
      }
      localStorage.setItem('code', item['code']);
      return '';
    });
  }

  //Lopping and object an removing the code to pass if exists
  settingObject(value: accessResult) {
    //Setting the usefull items
    localStorage.setItem('access_token', value.access_token);
    localStorage.setItem('refresh_token', value.refresh_token);
    localStorage.setItem('expires_in', value.expires_in.toString());
    if (localStorage.getItem('code')) {
      localStorage.removeItem('code');
    }
  }
}

/*
Notes:

HttpParams and Headers are inmutable the only way to put more is just put an equal in the set part with the name of the variable
Example: name_variable = name_variable.set(value,value);
*/
