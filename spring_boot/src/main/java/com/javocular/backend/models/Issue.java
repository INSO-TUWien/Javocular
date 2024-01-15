package com.javocular.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Issue {

    @JsonProperty
    public String id;
    @JsonProperty
    public int iid;
    @JsonProperty
    public String title;
    @JsonProperty
    public String description;
    @JsonProperty
    public String state;
    @JsonProperty
    public String url;
    @JsonProperty
    public String closedAt;
    @JsonProperty
    public String createdAt;
    @JsonProperty
    public String updatedAt;
    @JsonProperty
    public Label[] labels;
    @JsonProperty
    public String milestone;
}
