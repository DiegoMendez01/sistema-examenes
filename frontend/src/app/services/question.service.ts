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
}
