package com.sistema.examenes.sistema_examenes_backend.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

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

import com.sistema.examenes.sistema_examenes_backend.models.Exam;
import com.sistema.examenes.sistema_examenes_backend.models.Question;
import com.sistema.examenes.sistema_examenes_backend.services.ExamService;
import com.sistema.examenes.sistema_examenes_backend.services.QuestionService;

@RestController
@RequestMapping("api/v1/questions")
@CrossOrigin("*")
public class QuestionController
{
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private ExamService examService;
	
	@PostMapping("/")
	public ResponseEntity<Question> createQuestion(@RequestBody Question question)
	{
		return ResponseEntity.ok(questionService.createQuestion(question));
	}
	
	@PutMapping("/")
	public ResponseEntity<Question> updateQuestion(@RequestBody Question question)
	{
		return ResponseEntity.ok(questionService.updateQuestion(question));
	}
	
	@GetMapping("/exam/{examId}")
	public ResponseEntity<?> getQuestionsByExam(@PathVariable("examId") Long examId)
	{
		Exam exam = examService.getExamById(examId);
		List<Question> questions = exam.getQuestions();

	    List<Question> exams = new ArrayList<>(questions);
		
		if(exams.size() > Integer.parseInt(exam.getNumberOfQuestions())) {
			exams = exams.subList(0, Integer.parseInt(exam.getNumberOfQuestions() + 1));
		}
		
		Collections.shuffle(exams);
		return ResponseEntity.ok(exams);
	}
	
	@GetMapping("/{questionId}")
	public Question getQuestionById(@PathVariable("questionId") Long questionId)
	{
		return questionService.getQuestionById(questionId);
	}
	
	@DeleteMapping("/{questionId}")
	public void deleteQuestion(@PathVariable("questionId") Long questionId)
	{
		questionService.deleteQuestion(questionId);
	}
	
	@GetMapping("/exam/admin/{examId}")
	public ResponseEntity<?> getQuestionsExamByAdmin(@PathVariable("examId") Long examId)
	{
		Exam exam = new Exam();
		exam.setId(examId);
		Set<Question> questions = questionService.getQuestionsByExam(exam);
		return ResponseEntity.ok(questions);
	}
}