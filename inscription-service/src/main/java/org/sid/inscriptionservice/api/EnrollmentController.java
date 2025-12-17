package org.sid.inscriptionservice.api;

import org.sid.inscriptionservice.client.CourseClient;
import org.sid.inscriptionservice.client.StudentClient;
import org.sid.inscriptionservice.domain.Enrollment;
import org.sid.inscriptionservice.repository.EnrollmentRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/enrollments")
public class EnrollmentController {

    private final EnrollmentRepository enrollmentRepository;
    private final StudentClient studentClient;
    private final CourseClient courseClient;

    public EnrollmentController(
            EnrollmentRepository enrollmentRepository,
            StudentClient studentClient,
            CourseClient courseClient
    ) {
        this.enrollmentRepository = enrollmentRepository;
        this.studentClient = studentClient;
        this.courseClient = courseClient;
    }

    @PostMapping
    public Enrollment enroll(
            @RequestParam Long studentId,
            @RequestParam Long courseId
    ) {
        // Vérifier étudiant
        studentClient.getStudentById(studentId);

        // Vérifier cours
        courseClient.getCourseById(courseId);

        Enrollment enrollment = Enrollment.builder()
                .studentId(studentId)
                .courseId(courseId)
                .enrolledAt(LocalDate.now())
                .build();

        return enrollmentRepository.save(enrollment);
    }

    @GetMapping
    public List<Enrollment> getAll() {
        return enrollmentRepository.findAll();
    }
}


