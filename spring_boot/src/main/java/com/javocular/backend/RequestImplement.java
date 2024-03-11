package com.javocular.backend;

import com.arangodb.ArangoCursor;
import com.javocular.backend.IModel.Commit;
import com.javocular.backend.IModel.Issue;

import java.util.*;

import com.javocular.backend.HelperFunctions;
import com.javocular.backend.OModel.CIMROutput;
import com.javocular.backend.OModel.CIMRStats;

public class RequestImplement implements Requests{

    private final Reader read = new Reader();

    @Override
    public CIMROutput CIMRDiagram(String[] tables, List<String> exlAuths) {

        //set database connection to binocular database
        read.reset("binocular-Binocular");

        // each author is its own entry, and their contributions in each table is a dedicated entry in the int[]
        CIMROutput cimrOutput = new CIMROutput();


            ArangoCursor<Commit> commits = null;
            ArangoCursor<Issue> issues = null;

        if (Arrays.stream(tables).toList().contains("commits"))
            commits = read.QueryResultCommit("FOR t IN commits RETURN t");
        if (Arrays.stream(tables).toList().contains("issues"))
            issues = read.QueryResultIssue("FOR t IN issues RETURN t");

        while(commits != null && commits.hasNext()) {
            String author = "";
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
            */
                author = HelperFunctions.replaceUmlauts(HelperFunctions.stripEmail(commits.next().signature));

                if (!exlAuths.contains(author)) {
                    if(cimrOutput.find(author) == null) {
                        cimrOutput.add(author);
                    }
                    cimrOutput.find(author).cimrStats.commits++;
                }


            }

            while (issues != null && issues.hasNext()) {
                var assignee = issues.next().assignee;

                if (assignee != null && (assignee.name != null || assignee.login != null)) {
                    String author = HelperFunctions.replaceUmlauts(assignee.name);
                    String login = HelperFunctions.replaceUmlauts(assignee.login);

                    if (!exlAuths.contains(author)) {
                        if (author == null) {
                            if (cimrOutput.find(login) == null)
                                cimrOutput.add(login);
                            cimrOutput.find(login).cimrStats.issues++;
                        }
                        else {
                            if (cimrOutput.find(author) == null) {
                                if (login != null) author += " Login: " + login;
                                cimrOutput.add(author);
                            }
                            cimrOutput.find(author).cimrStats.issues++;
                        }
                    }
                }
            }

        return cimrOutput;
    }

}
