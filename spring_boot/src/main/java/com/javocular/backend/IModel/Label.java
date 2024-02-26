package com.javocular.backend.IModel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Label {
    @JsonProperty
    public long id;
    @JsonProperty
    public String node_id;
    @JsonProperty
    public String url;
    @JsonProperty
    public String name;
    @JsonProperty
    public String color;
    @JsonProperty("default")
    public boolean isDefault;
    @JsonProperty
    public String description;
}
