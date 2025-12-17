package org.sid.coursservice.repository;

import org.sid.coursservice.domain.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(path = "teachers")
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
