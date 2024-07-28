package com.sistema.examenes.sistema_examenes_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.examenes.sistema_examenes_backend.models.Rol;

public interface RolRepository extends JpaRepository<Rol, Long>
{

}