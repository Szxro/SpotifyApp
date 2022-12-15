import {
  redirectUris,
  clientCredentials,
} from '../../environments/environment';
import { getHeadersAndParams } from '../interfaces/interfaces';

//Params and Header for the Autorization
export const authParams: getHeadersAndParams[] = [
  { key: 'grant_type', value: 'authorization_code' },
  { key: 'redirect_uri', value: redirectUris.redirectUri },
  { key: 'client_id', value: clientCredentials.clientId },
  { key: 'client_secret', value: clientCredentials.secretKey },
];

//Params for Swap Refresh Tokens
export const paramsRefreshToken: getHeadersAndParams[] = [
  { key: 'grant_type', value: 'refresh_token' },
  { key: 'refreshToken', value: localStorage.getItem('refreshToken') || '' },
  { key: 'client_id', value: clientCredentials.clientId },
  { key: 'client_secret', value: clientCredentials.secretKey },
];

//Global header
export const authHeaders: getHeadersAndParams[] = [
  { key: 'Content-Type', value: 'application/x-www-form-urlencoded' },
];
