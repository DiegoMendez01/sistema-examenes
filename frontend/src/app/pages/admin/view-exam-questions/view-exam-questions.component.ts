import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exam-questions',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './view-exam-questions.component.html',
  styleUrl: './view-exam-questions.component.css'
})
export class ViewExamQuestionsComponent implements OnInit {
  
  examId    : any;
  title     : any;
  questions : any = [];
  
  constructor(private route : ActivatedRoute, private questionService : QuestionService) {}

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['id'];
    this.title  = this.route.snapshot.params['title'];

    this.questionService.listQuestionByExam(this.examId).subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        Swal.fire("Preguntas", "Error al cargar las preguntas del examen", "error");
      }
    )
  }
}