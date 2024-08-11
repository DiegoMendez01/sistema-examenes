package com.sistema.examenes.sistema_examenes_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.examenes.sistema_examenes_backend.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
	public User findByUsername(String username);
}