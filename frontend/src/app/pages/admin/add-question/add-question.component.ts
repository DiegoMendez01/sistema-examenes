import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { QuestionService } from '../../../services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent implements OnInit {

  examId   : any;
  title    : any;
  question : any = {
    exam    : {},
    content : '',
    option1 : '',
    option2 : '',
    option3 : '',
    option4 : '',
    answer  : '',
  }

  constructor(private route : ActivatedRoute, private questionService : QuestionService, private snack : MatSnackBar, private router : Router) {}

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title  = this.route.snapshot.params['title'];
    this.question.exam['id'] = this.examId;
  }

  formSubmit(){
    if(this.question.content.trim() == '' || this.question.content == null){
      this.snack.open("El contenido es requerido", 'Aceptar' ,{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }

    if(this.question.option1.trim() == '' || this.question.option1 == null){
      this.snack.open("La opcion 1 es requerida", 'Aceptar' ,{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }

    if(this.question.option2.trim() == '' || this.question.option2 == null){
      this.snack.open("La opcion 2 es requerida", 'Aceptar' ,{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }

    if(this.question.option3.trim() == '' || this.question.option3 == null){
      this.snack.open("La opcion 3 es requerida", 'Aceptar' ,{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }

    if(this.question.option4.trim() == '' || this.question.option4 == null){
      this.snack.open("La opcion 4 es requerida", 'Aceptar' ,{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }

    if(this.question.answer.trim() == '' || this.question.answer == null){
      this.snack.open("La respuesta es requerida", 'Aceptar' ,{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }

    this.questionService.saveQuestion(this.question).subscribe(
      (data) => {
        Swal.fire("Pregunta", "Se ha creado correctamente la pregunta", "success");
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer  = '';
        this.router.navigate([`/admin/view-questions/${this.examId}/${this.title}`])
      },
      (error) => {
        Swal.fire("Pregunta", "No se ha creado correctamente la pregunta", "error");
      }
    )
  }
}
