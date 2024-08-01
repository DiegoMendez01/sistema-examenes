import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  public generateToken(loginData : any)
  {
    return this.HttpClient.post(`${baseUrl}/generate-token`, loginData)
  }
}
