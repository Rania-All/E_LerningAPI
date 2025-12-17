package org.sid.inscriptionservice.repository;

import org.sid.inscriptionservice.domain.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
}
