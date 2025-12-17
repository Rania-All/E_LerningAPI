package org.sid.coursservice.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Entity
@Data
public class Teacher {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
}

