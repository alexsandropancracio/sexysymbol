package com.sexysymbol.backend.controller;

import com.sexysymbol.backend.dto.AdDto;
import com.sexysymbol.backend.service.AdService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AdController {

    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    @GetMapping("/ads")
    public ResponseEntity<List<AdDto>> listAds() {
        return ResponseEntity.ok(adService.listActiveAds());
    }

    @GetMapping("/ads/{slug}")
    public ResponseEntity<AdDto> getAd(@PathVariable String slug) {
        return ResponseEntity.ok(adService.getAdBySlug(slug));
    }
}

