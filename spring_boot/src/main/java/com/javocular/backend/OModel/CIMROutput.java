package com.javocular.backend.OModel;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class CIMROutput {
    @JsonProperty
    public ArrayList<CIMR> cimrs;

    public CIMROutput() {
        cimrs = new ArrayList<>();
    }

    public CIMR find(String authorName) {
        for(var cimr : cimrs) if (cimr.name.equals(authorName)) return cimr;

        return null;
    }

    public void add(String authorName) {
        cimrs.add(new CIMR(authorName));
    }

    public String stringify() {
        StringBuilder JSON = new StringBuilder();

        JSON.append("{ ");
        for (var cimr : cimrs) {
            JSON.append(cimr.stringify());
            JSON.append(", ");
        }
        JSON.deleteCharAt(JSON.length() - 2);
        JSON.append(" }");

        return JSON.toString();
    }
}
