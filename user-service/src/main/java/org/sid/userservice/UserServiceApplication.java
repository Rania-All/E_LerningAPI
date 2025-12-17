package org.sid.userservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.sid.userservice.domain.Student;
import org.sid.userservice.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UserServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }

    // Initialisation des étudiants au démarrage
    @Bean
    CommandLineRunner init(StudentRepository studentRepository) {
        return args -> {
            studentRepository.save(new Student(null, "Alice Dupont", "alice@example.com"));
            studentRepository.save(new Student(null, "Bob Martin", "bob@example.com"));
            studentRepository.save(new Student(null, "Charlie Durand", "charlie@example.com"));
        };
    }
}


