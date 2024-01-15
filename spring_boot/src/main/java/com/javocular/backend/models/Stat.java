package com.javocular.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Stat {
    @JsonProperty
    public int additions;
    @JsonProperty
    public int deletions;
}
