import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private HttpClient: HttpClient) { }

  public generateToken(loginData : any)
  {
    return this.HttpClient.post(`${baseUrl}/generate-token`, loginData)
  }

  // Guardar token en localStorage del navegador
  public loginUser(token : any)
  {
    localStorage.setItem('token', token);
  }

  public isLoggedIn()
  {
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  // Cerrar Sesion
  public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Obtener token
  public getToken()
  {
    return localStorage.getItem('token');
  }

  public setUser(user : any): void
  {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser()
  {
    let userStr = localStorage.getItem('user');

    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole()
  {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser()
  {
    return this.HttpClient.get(`${baseUrl}/current-user`);
  }
}
