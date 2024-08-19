import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient : HttpClient) { }

  public listQuestionByExam(examId : any)
  {
    return this.httpClient.get(`${baseUrl}/api/v1/questions/exam/admin/${examId}`);
  }

  public saveQuestion(question : any)
  {
    return this.httpClient.post(`${baseUrl}/api/v1/questions/`, question);
  }

  public deleteQuestion(id : any)
  {
    return this.httpClient.delete(`${baseUrl}/api/v1/questions/${id}`);
  }

  public updateQuestion(question : any)
  {
    return this.httpClient.put(`${baseUrl}/api/v1/questions/`, question)
  }

  public getQuestion(id : any)
  {
    return this.httpClient.get(`${baseUrl}/api/v1/questions/${id}`);
  }
}
