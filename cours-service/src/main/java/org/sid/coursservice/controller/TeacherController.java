package org.sid.coursservice.controller;

import org.sid.coursservice.domain.Teacher;
import org.sid.coursservice.service.TeacherService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teachers")
public class TeacherController {

    private final TeacherService service;

    public TeacherController(TeacherService service) {
        this.service = service;
    }

    // Créer un professeur
    @PostMapping
    public Teacher create(@RequestBody Teacher t) {
        return service.save(t);
    }

    // Récupérer tous les professeurs
    @GetMapping
    public List<Teacher> all() {
        return service.findAll();
    }

    // Récupérer un professeur par ID
    @GetMapping("/{id}")
    public Teacher getById(@PathVariable Long id) {
        return service.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found with ID: " + id));
    }

    // Mettre à jour un professeur
    @PutMapping("/{id}")
    public Teacher update(@PathVariable Long id, @RequestBody Teacher updatedTeacher) {
        Teacher teacher = service.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found with ID: " + id));
        teacher.setName(updatedTeacher.getName());
        teacher.setEmail(updatedTeacher.getEmail());
        return service.save(teacher);
    }

    // Supprimer un professeur
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found with ID: " + id));
        service.deleteById(id);
    }
}
