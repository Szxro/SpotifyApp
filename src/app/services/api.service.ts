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

  logUser(): void {
    let result: any = this.getUrl;
    //Saving the user credentials
    this.saveUserAuth(result.access_token, result.expires_in);
    if (
      !localStorage.getItem('Token') ||
      !localStorage.getItem('expiredTime')
    ) {
      return console.log('Something Happen');
    }

    return console.log('The user can log in');
  }

  saveUserAuth(token: string, expiredTime: string): void {
    if (!token || !expiredTime) {
      //TODO:Make a popout and return to the login page
      return console.log('Something Happen');
    }
    localStorage.setItem('Token', token);
    localStorage.setItem('expiredTime', expiredTime);
    return console.log('User Credentials save');
  }
}
