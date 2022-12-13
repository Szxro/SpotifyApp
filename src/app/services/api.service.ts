import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /*
    TODO:
    -Divide the project  
    -Make Routes(Login/Home/etc..)
    -Get the token and expiredate and save it in the localstorage
    -Verify if the token and the expiredate is in the localstorage to redirect to some route(Guard)
    -Make an method when the token expires and make the user login again or get the refreshToken

    Note: The token expires in 3600s in minutes is 60 min
  */

  //Get the AuthUri
  get loginUrl(): string {
    return `${environment.authEndPoint}?client_id=${
      environment.clientId
    }&redirect_uri=${environment.redirectUri}&scope=${environment.scopes.join(
      '%20'
    )}&response_type=token&show_dialog=true`;
  }

  //Get the token and other stuffs
  get getUrl() {
    //return the url but when the hash(#) begin
    return (
      window.location.hash
        //take out the hash and just left the usefull values
        .substring(1)
        //take out the & pattern
        .split('&')
        //init a new object
        .reduce((initial: { [key: string]: string }, item) => {
          //take out the = in the new array
          let result = item.split('=');
          //in the new object is the position 0 is going to be the result 0 and the value is going to be the position 1 and so on..
          initial[result[0]] = decodeURIComponent(result[1]);
          return initial;
        }, {})
    );
  }
  constructor() {}
}
