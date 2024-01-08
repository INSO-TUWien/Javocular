package com.javocular.backend;

import com.arangodb.ArangoCursor;
import com.arangodb.entity.BaseDocument;

import java.util.*;
import java.util.HashMap;

public class RequestImplement implements Requests{

    private final Reader read = new Reader();

    @Override
    public JSONObjectList CIMRDiagram(String[] tables, List<String> exlAuths) {

        //set database connection to binocular database
        read.reset("binocular-Binocular");

        // each author is its own entry, and their contributions in each table is a dedicated entry in the int[]
        JSONObjectList cimrs = new JSONObjectList();

        for(var table : tables) {

            ArangoCursor<BaseDocument> cursor = read.QueryResult("FOR t IN " + table + " RETURN t");

            String att = ("mergeRequests".equals(table) || "issues".equals(table)) ? "assignees" : "signature";

            while(cursor.hasNext()) {
                String author = "";
                switch (table)
                {
                    /*
                    case "mergeRequests":
                        author = ((BaseDocument) cursor.next().getAttribute("assignees")).getAttribute("login").toString();
                        if (!exlAuths.contains(author)) {
                            if(cimrs.find(author) == null) {
                                cimrs.add(author, propertyNames);
                            }
                            cimrs.get(author).getObjectContent().replace("mergeRequests", cimrs.get(author).getObjectContent().get("mergeRequests"), (int)cimrs.get(author).getObjectContent().get("mergeRequests")++);

                            if(!cimrs.contains()) {
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
                    */
                    case "commits":
                        author = cursor.next().getAttribute("signature").toString();

                        if (!exlAuths.contains(author)) {
                            if(cimrs.find(author) == null) {
                                cimrs.add(author, tables);
                            }
                            int value = (int) cimrs.get(author).getObjectContent().get("commits");
                            cimrs.get(author).getObjectContent().replace("commits", value, value + 1);

                        }
                        break;
                }
            }
        }

        return cimrs;
    }

}
