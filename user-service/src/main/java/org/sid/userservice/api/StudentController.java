package org.sid.userservice.api;

import org.sid.userservice.domain.Student;
import org.sid.userservice.repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentRepository repo;

    public StudentController(StudentRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Student save(@RequestBody Student s) {
        return repo.save(s);
    }

    @GetMapping("/{id}")
    public Student get(@PathVariable Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @GetMapping
    public List<Student> getAll() {
        return repo.findAll();
    }
}
