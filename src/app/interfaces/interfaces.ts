export interface accessResult {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export interface getHeadersAndParams {
  key: string;
  value: string;
}

export interface swapRefreshToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}
