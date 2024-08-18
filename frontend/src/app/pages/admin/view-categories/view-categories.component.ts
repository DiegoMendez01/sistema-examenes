import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'; 
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-view-categories',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit {

  categories = [
    {
      id: 1,
      title: 'Lenguajes de programacion',
      description: 'Esta es una descripcion de prueba'
    },
    {
      id: 2,
      title: 'Lenguajes de programacion',
      description: 'Esta es una descripcion de prueba'
    }
  ]

  constructor() {}

  ngOnInit() : void {

  }
}
