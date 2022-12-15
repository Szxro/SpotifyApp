import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi!: Spotify.SpotifyWebApiJs;
  constructor() {
    this.spotifyApi = new Spotify();
  }

  setAccessToken(token: string): void {
    if (!token) {
      return console.log('Error');
    }
    this.spotifyApi.setAccessToken(token);
  }

  async getMe() {
    const userInfo = await this.spotifyApi.getMe();
    console.log(userInfo);
  }
}
