package com.javocular.backend;

import java.util.*;

public class JSONObjectList {

    private List<JSONObject> objects;

    public JSONObjectList() {
        objects = new ArrayList<>();
    }

    // Looks for objects in list
    // returns first hit
    public JSONObject find(String objectType) {

        for(var object : objects) {
            if(object.getObjectType().equals(objectType)) return object;
        }

        return null;
    }

    // adds object into list
    // doesn't add if key exists
    public void add(String type, String[] properties) {
        if(find(type) != null) return;

        HashMap<String, Object> propertyNames = new HashMap<>();

        for(var property : properties) {
            propertyNames.put(property, 0L);
        }

        objects.add(new JSONObject(type, propertyNames));
    }

    // returns first hit in list
    public JSONObject get(String type) {
        return find(type);
    }

    // stringifies the objects into parseable JSON
    public String stringify() {
        StringBuilder str = new StringBuilder();

        str.append("{ ");
        objects.forEach(obj -> str.append(obj.stringify()).append(", "));
        str.deleteCharAt(str.length() - 2);
        str.append(" }");
        return str.toString();
    }
}