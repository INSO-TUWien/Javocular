package com.javocular.backend;

import com.arangodb.*;
import com.javocular.backend.IModel.Commit;
import com.javocular.backend.IModel.Issue;

import java.util.List;
import java.util.ArrayList;

public class Reader{
    private ArangoDB arangodb;
    private String connector;

    public Reader(){
        arangodb = null;
        connector = "";
    }

    public void ChangeType(String connection) {
        arangodb = new ArangoDB.Builder().host("localhost", 8529).user("root").password("").build();
        connector = connection;
    }

    public ArangoCursor<Commit> QueryResultCommit(String query) {

        if(arangodb == null) return null;
        List<String> result = new ArrayList<>();
        ArangoCursor<Commit> cursor = arangodb.db(connector).query(query, Commit.class, null, null);
        // while(cursor.hasNext()) result.add(cursor.next().toString());
        return cursor;
    }

    public ArangoCursor<Issue> QueryResultIssue(String query) {

        if(arangodb == null) return null;
        List<String> result = new ArrayList<>();
        ArangoCursor<Issue> cursor = arangodb.db(connector).query(query, Issue.class, null, null);
        // while(cursor.hasNext()) result.add(cursor.next().toString());
        return cursor;
    }

    public void reset(String connection)
    {
        this.ChangeType(connection);
    }
}