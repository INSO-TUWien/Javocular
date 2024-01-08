package com.javocular.backend;
import org.slf4j.event.KeyValuePair;

import java.util.HashMap;

public class JSONObject {

    // contains Type Name of Object
    private String objectType;

    // contains values of Object
    private HashMap<String, Object> objectContent;

    JSONObject(String type, HashMap<String, Object> content) {
        objectType = type;
        objectContent = content;
    }

    JSONObject(String type) { this(type, null); }

    JSONObject() { this("", null); }

    // adds property to Object
    public boolean AddProperty(KeyValuePair property) {
        if(objectContent.containsKey(property.key)) return false;

        objectContent.put(property.key, property.value);
        return true;
    }

    // returns the JSON object name
    public String getObjectType() { return objectType; }

    // returns the JSON object properties
    public HashMap<String, Object> getObjectContent() { return objectContent; }

    // stringifies Object into JSON object
    public String stringify() {
        StringBuilder sb = new StringBuilder();

        sb.append("\"").append(objectType).append("\":{ ");

        for(var pair : objectContent.entrySet()) sb.append("\"").append(pair.getKey()).append("\": ").append(pair.getValue().toString()).append(",");

        sb.deleteCharAt(sb.length() - 1);
        sb.append(" }");
        return sb.toString();
    }
}