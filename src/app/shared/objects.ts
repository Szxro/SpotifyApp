import { environment } from '../../environments/environment';

//Params and Header for the Autorization
export const authParams = [
  { key: 'grant_type', value: 'authorization_code' },
  { key: 'redirect_uri', value: environment.redirectUri },
  { key: 'code', value: localStorage.getItem('Code') || '' },
  { key: 'client_id', value: environment.clientId },
  { key: 'client_secret', value: environment.secretKey },
];

export const authHeaders = [
  { key: 'Content-Type', value: 'application/x-www-form-urlencoded' },
];
