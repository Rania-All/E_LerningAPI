package org.sid.inscriptionservice.service;

import lombok.RequiredArgsConstructor;
import org.sid.inscriptionservice.client.CourseClient;
import org.sid.inscriptionservice.client.StudentClient;
import org.sid.inscriptionservice.domain.Enrollment;
import org.sid.inscriptionservice.repository.EnrollmentRepository;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class EnrollmentService {

    private final EnrollmentRepository repo;
    private final CourseClient courseClient;
    private final StudentClient studentClient;

    public Enrollment enroll(Long studentId, Long courseId) {
        studentClient.getStudentById(studentId);
        courseClient.getCourseById(courseId);
        return repo.save(
                new Enrollment(null, studentId, courseId, LocalDate.now())
        );
    }
}


