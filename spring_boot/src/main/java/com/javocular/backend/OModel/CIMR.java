package com.javocular.backend.OModel;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonSerializer;

public class CIMR {

    @JsonProperty
    public String name;
    @JsonProperty
    public CIMRStats cimrStats;

    public CIMR(String name) {
        this.name = name;
        cimrStats = new CIMRStats();
    }

    public CIMR() { this(""); }

    public String stringify() {

        return "\"" +
                name +
                "\":{ " +
                "\"commits\": " + cimrStats.commits + ", " +
                "\"issues\": " + cimrStats.issues + ", " +
                "\"mergeRequests\" :" + cimrStats.mergeRequest + " }";
    }
}
