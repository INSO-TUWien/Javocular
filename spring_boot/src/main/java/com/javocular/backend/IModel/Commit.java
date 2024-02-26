package com.javocular.backend.IModel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Commit {
    @JsonProperty
    public String sha;
    @JsonProperty
    public String signature;
    @JsonProperty
    public String date;
    @JsonProperty
    public String message;
    @JsonProperty
    public String webUrl;
    @JsonProperty
    public String branch;
    @JsonProperty
    public String history;
    @JsonProperty
    public String parents;
    @JsonProperty
    public Stat stats;

    public Commit() {
        sha = "";
        signature = "";
        date = "";
        message = "";
        webUrl = "";
        branch = "";
        history = "";
        parents = "";
        stats = new Stat();
    }
}
