package com.sistema.examenes.sistema_examenes_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.examenes.sistema_examenes_backend.models.Category;
import com.sistema.examenes.sistema_examenes_backend.models.Exam;
import com.sistema.examenes.sistema_examenes_backend.services.ExamService;

@RestController
@RequestMapping("api/v1/exams")
@CrossOrigin("*")
public class ExamController
{
	@Autowired
	private ExamService examService;
	
	@PostMapping("/")
	public ResponseEntity<Exam> createExam(@RequestBody Exam exam)
	{
		return ResponseEntity.ok(examService.createExam(exam));
	}
	
	@PutMapping("/")
	public ResponseEntity<Exam> updateExam(@RequestBody Exam exam)
	{
		return ResponseEntity.ok(examService.updateExam(exam));
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getExams()
	{
		return ResponseEntity.ok(examService.getExams());
	}
	
	@GetMapping("/{examId}")
	public Exam getExamById(@PathVariable("examId") Long examId)
	{
		return examService.getExamById(examId);
	}
	
	@DeleteMapping("/{examId}")
	public void deleteExam(@PathVariable("examId") Long examId)
	{
		examService.deleteExam(examId);
	}
	
	@GetMapping("/category/{categoryId}")
	public List<Exam> getExamByCategory(@PathVariable("categoryId") Long categoryId)
	{
		Category category = new Category();
		category.setId(categoryId);
		return examService.getExamByCategory(category);
	}
}