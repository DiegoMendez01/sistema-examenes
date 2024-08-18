package com.sistema.examenes.sistema_examenes_backend.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.examenes.sistema_examenes_backend.models.Exam;
import com.sistema.examenes.sistema_examenes_backend.models.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>
{
	Set<Question> findByExam(Exam exam);
}