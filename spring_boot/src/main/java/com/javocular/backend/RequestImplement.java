package com.javocular.backend;

import com.arangodb.ArangoCursor;
import com.arangodb.entity.BaseDocument;

import java.util.*;
import java.util.HashMap;

public class RequestImplement implements Requests{

    private final Reader read = new Reader();

    @Override
    public HashMap<String, int[]> CIMRDiagram(String[] tables, List<String> exlAuths) {

        //set database connection to binocular database
        read.reset("binocular-Binocular");

        // each author is its own entry, and their contributions in each table is a dedicated entry in the int[]
        HashMap<String, int[]> cimrs = new HashMap<>();

        for(var table : tables) {

            ArangoCursor<BaseDocument> cursor = read.QueryResult("FOR t IN " + table + " RETURN t");

            String att = ("mergeRequests".equals(table) || "issues".equals(table)) ? "assignees" : "signature";

            while(cursor.hasNext()) {
                String author = "";
                switch (table)
                {
                    case "mergeRequests":
                        author = ((BaseDocument) cursor.next().getAttribute("assignees")).getAttribute("login").toString();
                        if (!exlAuths.contains(author)) {
                            if(!cimrs.containsKey(author)) {
                                cimrs.put(author, new int[3]);
                            }
                            cimrs.get(author)[2]++;
                        }
                        break;

                    case "issues":
                        author = ((BaseDocument) cursor.next().getAttribute("assignees")).getAttribute("login").toString();
                        if (!exlAuths.contains(author)) {
                            if(!cimrs.containsKey(author)) {
                                cimrs.put(author, new int[3]);
                            }
                            cimrs.get(author)[1]++;
                        }
                        break;

                    case "commits":
                        author = cursor.next().getAttribute("signature").toString();
                        if (!exlAuths.contains(author)) {
                            if(!cimrs.containsKey(author)) {
                                cimrs.put(author, new int[3]);
                            }
                            cimrs.get(author)[0]++;
                        }
                        break;
                }
            }
        }

        return cimrs;
    }

}
