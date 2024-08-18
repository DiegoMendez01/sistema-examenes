import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient : HttpClient) { }

  public listExams()
  {
    return this.httpClient.get(`${baseUrl}/api/v1/exams/`);
  }

  public createExam(exam : any)
  {
    return this.httpClient.post(`${baseUrl}/api/v1/exams/`, exam);
  }

}
