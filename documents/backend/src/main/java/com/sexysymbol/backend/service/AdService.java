package com.sexysymbol.backend.service;

import com.sexysymbol.backend.dto.AdDto;
import com.sexysymbol.backend.entity.Profile;
import com.sexysymbol.backend.repository.ProfileRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdService {

    private final ProfileRepository profileRepository;

    public AdService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    /**
     * Mapeia perfis ativos para a estrutura AdDto esperada pelo frontend.
     * Por enquanto, apenas campos disponíveis na tabela profiles são preenchidos.
     */
    public List<AdDto> listActiveAds() {
        return profileRepository.findAllByActiveTrue()
                .stream()
                .map(this::toAdDto)
                .collect(Collectors.toList());
    }

    public AdDto getAdBySlug(String slug) {
        Profile profile = profileRepository.findBySlugAndActiveTrue(slug)
                .orElseThrow(() -> new RuntimeException("Perfil não encontrado"));
        return toAdDto(profile);
    }

    private AdDto toAdDto(Profile profile) {
        AdDto dto = new AdDto();
        dto.setId(profile.getSlug());
        dto.setName(profile.getName());
        dto.setAge(profile.getAge());
        dto.setLocations(profile.getCity());
        dto.setBio(profile.getBio());
        dto.setRating(profile.getRating());
        dto.setAltura(profile.getHeightCm());
        dto.setPeso(profile.getWeightKg());
        dto.setVerified(profile.getVerified());
        dto.setReviewsCount(profile.getReviewsCount());

        // TODO: integrar com tabelas de fotos, etnias, formas de pagamento etc.
        dto.setImages(Collections.emptyList());
        dto.setEtnia(null);
        dto.setAtendimento(Collections.emptyList());
        dto.setLugar(Collections.emptyList());
        dto.setFormasPagamento(Collections.emptyList());

        return dto;
    }
}

