package org.sid.certificatservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "org.sid.certificatservice.client")
public class CertificatServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CertificatServiceApplication.class, args);
	}
}

