package com.sistema.examenes.sistema_examenes_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.examenes.sistema_examenes_backend.models.User;

public interface UserRepository extends JpaRepository<User, Long>
{
	public User findByUsername(String username);
}