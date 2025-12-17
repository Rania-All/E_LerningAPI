package org.sid.integrationservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class IntegrationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntegrationServiceApplication.class, args);
	}

	// ✅ ICI : le WebClient
	@Bean
	public WebClient webClient() {
		return WebClient.builder()
				.baseUrl("https://www.googleapis.com")
				.build();
	}

}
