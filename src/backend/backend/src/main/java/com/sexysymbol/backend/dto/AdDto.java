package com.sexysymbol.backend.dto;

import java.math.BigDecimal;
import java.util.List;

/**
 * DTO inspirado na interface Ad do frontend (AdsData.ts).
 * Por enquanto, alguns campos como etnia, atendimento, lugar e formasPagamento
 * serão preenchidos depois que as demais entidades forem mapeadas.
 */
public class AdDto {

    private String id;
    private String name;
    private Integer age;
    private String locations;
    private String bio;
    private BigDecimal rating;
    private List<String> images;
    private String etnia;
    private List<String> atendimento;
    private List<String> lugar;
    private List<String> formasPagamento;
    private Integer altura;
    private Integer peso;
    private Boolean verified;
    private Integer reviewsCount;

    public AdDto() {
    }

    // Getters e setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getLocations() {
        return locations;
    }

    public void setLocations(String locations) {
        this.locations = locations;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public BigDecimal getRating() {
        return rating;
    }

    public void setRating(BigDecimal rating) {
        this.rating = rating;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public String getEtnia() {
        return etnia;
    }

    public void setEtnia(String etnia) {
        this.etnia = etnia;
    }

    public List<String> getAtendimento() {
        return atendimento;
    }

    public void setAtendimento(List<String> atendimento) {
        this.atendimento = atendimento;
    }

    public List<String> getLugar() {
        return lugar;
    }

    public void setLugar(List<String> lugar) {
        this.lugar = lugar;
    }

    public List<String> getFormasPagamento() {
        return formasPagamento;
    }

    public void setFormasPagamento(List<String> formasPagamento) {
        this.formasPagamento = formasPagamento;
    }

    public Integer getAltura() {
        return altura;
    }

    public void setAltura(Integer altura) {
        this.altura = altura;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public Boolean getVerified() {
        return verified;
    }

    public void setVerified(Boolean verified) {
        this.verified = verified;
    }

    public Integer getReviewsCount() {
        return reviewsCount;
    }

    public void setReviewsCount(Integer reviewsCount) {
        this.reviewsCount = reviewsCount;
    }
}

