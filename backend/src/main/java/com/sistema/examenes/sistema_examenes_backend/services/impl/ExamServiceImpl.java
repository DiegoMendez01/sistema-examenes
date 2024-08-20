package com.sistema.examenes.sistema_examenes_backend.services.impl;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.examenes.sistema_examenes_backend.models.Category;
import com.sistema.examenes.sistema_examenes_backend.models.Exam;
import com.sistema.examenes.sistema_examenes_backend.repositories.ExamRepository;
import com.sistema.examenes.sistema_examenes_backend.services.ExamService;

@Service
public class ExamServiceImpl implements ExamService
{
	@Autowired
	private ExamRepository examRepository;

	@Override
	public Exam createExam(Exam exam) {
		return examRepository.save(exam);
	}

	@Override
	public Exam updateExam(Exam exam) {
		return examRepository.save(exam);
	}

	@Override
	public Set<Exam> getExams() {
		return new LinkedHashSet<>(examRepository.findAll());
	}

	@Override
	public Exam getExamById(Long id) {
		return examRepository.findById(id).get();
	}

	@Override
	public void deleteExam(Long id) {
		Exam exam = new Exam();
		exam.setId(id);
		examRepository.delete(exam);
	}

	@Override
	public List<Exam> getExamByCategory(Category category) {
		return this.examRepository.findByCategory(category);
	}

	@Override
	public List<Exam> getExamsActive() {
		return this.examRepository.findByStateDelete(true);
	}

	@Override
	public List<Exam> getExamsActiveByCategory(Category category) {
		return this.examRepository.findByCategoryAndStateDelete(category, true);
	}
}