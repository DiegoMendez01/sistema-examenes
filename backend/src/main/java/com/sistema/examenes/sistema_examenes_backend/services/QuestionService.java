package com.sistema.examenes.sistema_examenes_backend.services;

import java.util.Set;

import com.sistema.examenes.sistema_examenes_backend.models.Exam;
import com.sistema.examenes.sistema_examenes_backend.models.Question;

public interface QuestionService
{
	Question createQuestion(Question question);
	
	Question updateQuestion(Question question);
	
	Set<Question> getQuestions();
	
	Question getQuestionById(Long id);
	
	Set<Question> getQuestionsByExam(Exam exam);
	
	void deleteQuestion(Long id);
}