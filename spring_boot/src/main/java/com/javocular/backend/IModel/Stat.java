package com.javocular.backend.IModel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Stat {
    @JsonProperty
    public int additions;
    @JsonProperty
    public int deletions;
}
