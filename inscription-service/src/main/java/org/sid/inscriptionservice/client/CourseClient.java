package org.sid.inscriptionservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "cours-service")
public interface CourseClient {

    @GetMapping("/courses/{id}")
    CourseResponse getCourseById(@PathVariable("id") Long id);

    class CourseResponse {
        private Long id;
        private String title;
        private String description;
        private Integer duration; // ✅ ici

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public Integer getDuration() { return duration; }
        public void setDuration(Integer duration) { this.duration = duration; }
    }
}
