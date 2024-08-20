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

  public deleteExam(id : any)
  {
    return this.httpClient.delete(`${baseUrl}/api/v1/exams/${id}`)
  }

  public getExamById(id : any)
  {
    return this.httpClient.get(`${baseUrl}/api/v1/exams/${id}`);
  }

  public updateExam(exam : any)
  {
    return this.httpClient.put(`${baseUrl}/api/v1/exams/`, exam);
  }

  public getExamByCategory(categoryId : any)
  {
    return this.httpClient.get(`${baseUrl}/api/v1/exams/category/${categoryId}`);
  }

  public getExamsActive()
  {
    return this.httpClient.get(`${baseUrl}/api/v1/exams/active`);
  }

  public getExamsActiveByCategory(categoryId : any)
  {
    return this.httpClient.get(`${baseUrl}/api/v1/exams/category/active/${categoryId}`);
  }
}
