package org.reader;

import java.awt.*;
import javax.swing.*;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.util.ArrayList;
import java.util.List;

import com.arangodb.entity.BaseDocument;
import com.arangodb.*;
import com.arangodb.util.RawJson;
import com.fasterxml.jackson.databind.ser.Serializers;

public class Reader{
    private ArangoDB arangodb;
    private String connector;
    private ReaderType type;

    public Reader(){
        arangodb = null;
        connector = "";
    }

    public static Reader CreateReader(ReaderType type, String connection) {
        Reader r = new Reader();
        r.type = type;
        r.ChangeType(type, connection);
        return r;
    }

    public void ChangeType(ReaderType type, String connection) {
        switch (type) {
            case Database:
                arangodb = new ArangoDB.Builder().host("localhost", 8529).user("root").password("").build();
                connector = connection;
                break;

            // TODO Implement XML start
            case XML:
                break;

            // TODO Implement JSON start
            case JSON:
                break;

            // TODO Implement Custom Text Format start
            case TEXT_CTF:
                break;
        }
    }

    public ArrayList<ReadData> QueryResult(String query) {
        switch(type)
        {
            case Database:
                if(arangodb == null) return null;
                ArrayList<ReadData> result = new ArrayList<>();
                ArangoCursor<BaseDocument> cursor = arangodb.db(connector).query(query, BaseDocument.class, null, null);
                while(cursor.hasNext()) result.add(new ReadData(cursor.next()));
                return result;

            // TODO Implement XML start
            case XML:
                break;

            // TODO Implement JSON start
            case JSON:
                break;

            // TODO Implement Custom Text Format start
            case TEXT_CTF:
                break;
        }

        return null;
    }
}