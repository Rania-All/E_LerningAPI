package org.sid.certificatservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
        name = "user-service",
        contextId = "certificatStudentClient"
)
public interface StudentClient {

    @GetMapping("/students/{id}")
    StudentResponse getStudentById(@PathVariable("id") Long id);

    class StudentResponse {
        private Long id;
        private String name;
        private String email;

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    }
}
