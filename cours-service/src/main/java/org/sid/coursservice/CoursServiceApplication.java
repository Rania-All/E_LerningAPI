package org.sid.coursservice;
import org.sid.coursservice.domain.Course;
import org.sid.coursservice.domain.Teacher;
import org.sid.coursservice.repository.CourseRepository;
import org.sid.coursservice.repository.TeacherRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CoursServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoursServiceApplication.class, args);
	}
	@Bean
	CommandLineRunner initData(
			CourseRepository courseRepository,
			TeacherRepository teacherRepository
	) {
		return args -> {

			// Premier professeur
			Teacher teacher1 = new Teacher();
			teacher1.setName("Dr Martin");
			teacher1.setEmail("martin@edu.com");
			teacherRepository.save(teacher1);

			Course course1 = new Course();
			course1.setTitle("Java Fundamentals");
			course1.setDescription("Introduction à Java pour débutants");
			course1.setYoutubeVideoId("java101");
			course1.setTeacher(teacher1);

			Course course2 = new Course();
			course2.setTitle("Advanced Java");
			course2.setDescription("Programmation avancée en Java");
			course2.setYoutubeVideoId("java202");
			course2.setTeacher(teacher1);

			// Deuxième professeur
			Teacher teacher2 = new Teacher();
			teacher2.setName("Prof. Alice");
			teacher2.setEmail("alice@edu.com");
			teacherRepository.save(teacher2);

			Course course3 = new Course();
			course3.setTitle("Python Basics");
			course3.setDescription("Apprendre Python depuis zéro");
			course3.setYoutubeVideoId("py101");
			course3.setTeacher(teacher2);

			Course course4 = new Course();
			course4.setTitle("Data Science with Python");
			course4.setDescription("Introduction à la data science avec Python");
			course4.setYoutubeVideoId("py202");
			course4.setTeacher(teacher2);

			// Sauvegarde de tous les cours
			courseRepository.saveAll(List.of(course1, course2, course3, course4));
		};
	}}

