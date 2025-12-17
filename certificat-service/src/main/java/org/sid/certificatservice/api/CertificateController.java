package org.sid.certificatservice.api;

import org.sid.certificatservice.client.CourseClient;
import org.sid.certificatservice.client.StudentClient;
import org.sid.certificatservice.service.PdfCertificateService;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/certificates")
public class CertificateController {

    private final PdfCertificateService pdfService;
    private final StudentClient studentClient;
    private final CourseClient courseClient;

    public CertificateController(PdfCertificateService pdfService,
                                 StudentClient studentClient,
                                 CourseClient courseClient) {
        this.pdfService = pdfService;
        this.studentClient = studentClient;
        this.courseClient = courseClient;
    }

    @GetMapping("/{studentId}/{courseId}")
    public ResponseEntity<byte[]> generate(@PathVariable Long studentId,
                                           @PathVariable Long courseId) {

        String studentName = studentClient.getStudentById(studentId).getName();
        String courseTitle = courseClient.getCourseById(courseId).getTitle();

        byte[] pdf = pdfService.generateCertificate(studentName, courseTitle);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"certificate.pdf\"")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }
}
