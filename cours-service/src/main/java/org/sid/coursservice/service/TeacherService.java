package org.sid.coursservice.service;
import org.sid.coursservice.domain.Teacher;
import org.sid.coursservice.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    private final TeacherRepository repo;

    public TeacherService(TeacherRepository repo) {
        this.repo = repo;
    }

    // Créer ou mettre à jour un professeur
    public Teacher save(Teacher t) {
        return repo.save(t);
    }

    // Récupérer tous les professeurs
    public List<Teacher> findAll() {
        return repo.findAll();
    }

    // Récupérer un professeur par ID
    public Optional<Teacher> findById(Long id) {
        return repo.findById(id);
    }

    // Supprimer un professeur par ID
    public void deleteById(Long id) {
        repo.deleteById(id);
    }
}
