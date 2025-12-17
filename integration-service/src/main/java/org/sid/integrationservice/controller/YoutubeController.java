package org.sid.integrationservice.controller;

import org.sid.integrationservice.dto.YoutubeResponse;
import org.sid.integrationservice.service.YoutubeService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/videos")
public class YoutubeController {

    private final YoutubeService youtubeService;

    public YoutubeController(YoutubeService youtubeService) {
        this.youtubeService = youtubeService;
    }

    @GetMapping
    public Mono<YoutubeResponse> search(@RequestParam String keyword) {
        return youtubeService.search(keyword);
    }
}
