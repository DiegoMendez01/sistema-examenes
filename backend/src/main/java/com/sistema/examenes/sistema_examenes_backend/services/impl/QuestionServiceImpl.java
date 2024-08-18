package com.sistema.examenes.sistema_examenes_backend.services.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.examenes.sistema_examenes_backend.models.Exam;
import com.sistema.examenes.sistema_examenes_backend.models.Question;
import com.sistema.examenes.sistema_examenes_backend.repositories.QuestionRepository;
import com.sistema.examenes.sistema_examenes_backend.services.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService
{
	@Autowired
	private QuestionRepository questionRepository;

	@Override
	public Question createQuestion(Question question) {
		return questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		return questionRepository.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		return new LinkedHashSet<>(questionRepository.findAll());
	}

	@Override
	public Question getQuestionById(Long id) {
		return questionRepository.findById(id).get();
	}

	@Override
	public Set<Question> getQuestionsByExam(Exam exam) {
		return questionRepository.findByExam(exam);
	}

	@Override
	public void deleteQuestion(Long id) {
		Question question = new Question();
		question.setId(id);
		questionRepository.delete(question);
	}

}
