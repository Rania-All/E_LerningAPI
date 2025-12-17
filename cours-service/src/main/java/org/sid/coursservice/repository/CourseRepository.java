package org.sid.coursservice.repository;

import org.sid.coursservice.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "courses")
public interface CourseRepository extends  JpaRepository<Course, Long> {}


