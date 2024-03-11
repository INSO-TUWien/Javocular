package com.javocular.backend.OModel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CIMRStats {

    @JsonProperty
    public long commits;
    @JsonProperty
    public long issues;
    @JsonProperty
    public long mergeRequest;

    public CIMRStats() {
        commits = 0;
        issues = 0;
        mergeRequest = 0;
    }
}
