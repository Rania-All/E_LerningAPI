package org.sid.integrationservice.service;

import org.sid.integrationservice.dto.YoutubeResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class YoutubeService {

    private final WebClient webClient;
    private static final String API_KEY = "AIzaSyD6Kft474vXkkTomu9aPaygKXG3ikUehqg";

    public YoutubeService(WebClient webClient) {
        this.webClient = webClient;
    }

    public Mono<YoutubeResponse> search(String keyword) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/youtube/v3/search")
                        .queryParam("part", "snippet")
                        .queryParam("type", "video")
                        .queryParam("maxResults", 5)
                        .queryParam("q", keyword)
                        .queryParam("key", API_KEY)
                        .build()
                )
                .retrieve()
                .bodyToMono(YoutubeResponse.class);
    }

}
