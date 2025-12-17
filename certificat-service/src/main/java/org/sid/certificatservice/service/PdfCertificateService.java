package org.sid.certificatservice.service;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import org.sid.certificatservice.exception.PdfGenerationException;
import org.springframework.stereotype.Service;
import org.sid.certificatservice.exception.PdfGenerationException;


import java.io.ByteArrayOutputStream;

@Service
public class PdfCertificateService {

    public byte[] generateCertificate(String studentName, String courseTitle) {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();

            document.add(new Paragraph("CERTIFICAT DE RÉUSSITE"));
            document.add(new Paragraph("Nom de l'étudiant : " + studentName));
            document.add(new Paragraph("Cours : " + courseTitle));
            document.add(new Paragraph("Félicitations pour votre réussite !"));

            document.close();
            return out.toByteArray();

        } catch (DocumentException e) {
            throw new PdfGenerationException(
                    "Erreur lors de la génération du certificat PDF",
                    e
            );
        }
    }
}
