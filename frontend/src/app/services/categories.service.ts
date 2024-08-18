import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient : HttpClient) { }

  public listCategories()
  {
    return this.httpClient.get(`${baseUrl}/api/v1/categories/`)
  }
}
