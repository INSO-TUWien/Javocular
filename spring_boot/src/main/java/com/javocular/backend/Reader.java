package com.javocular.backend;

import com.arangodb.entity.BaseDocument;
import com.arangodb.*;
import com.arangodb.util.RawJson;
import com.fasterxml.jackson.databind.ser.Serializers;
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

    public ArangoCursor<BaseDocument> QueryResult(String query) {

        if(arangodb == null) return null;
        List<String> result = new ArrayList<>();
        ArangoCursor<BaseDocument> cursor = arangodb.db(connector).query(query, BaseDocument.class, null, null);
        // while(cursor.hasNext()) result.add(cursor.next().toString());
        return cursor;
    }

    public void reset(String connection)
    {
        this.ChangeType(connection);
    }
}