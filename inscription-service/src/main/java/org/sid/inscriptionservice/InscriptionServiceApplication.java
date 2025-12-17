package org.sid.inscriptionservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.sid.inscriptionservice.domain.Enrollment;
import org.sid.inscriptionservice.repository.EnrollmentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
@EnableFeignClients
public class InscriptionServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InscriptionServiceApplication.class, args);
    }

    // Initialisation de quelques inscriptions fictives
    @Bean
    CommandLineRunner init(EnrollmentRepository enrollmentRepo) {
        return args -> {

            // Exemple d'enregistrements manuels (IDs fictifs d'étudiants et cours)
            enrollmentRepo.save(new Enrollment(null, 1L, 1L, LocalDate.now()));
            enrollmentRepo.save(new Enrollment(null, 2L, 2L, LocalDate.now()));
            enrollmentRepo.save(new Enrollment(null, 1L, 3L, LocalDate.now()));
        };
    }
}


