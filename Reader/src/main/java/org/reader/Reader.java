package org.reader;

import java.awt.*;
import javax.swing.*;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.util.List;

import com.arangodb.entity.BaseDocument;
import com.arangodb.*;
import com.arangodb.util.RawJson;

public class Reader{
    private static ArangoDB arangodb;
    private static String connector;

    public Reader(ReaderType type, String connection) {
        switch (type)
        {
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

    public Reader(){
        arangodb = null;
        connector = "";
    }



    /*
    public static void main(String[] args) {
        arangodb = new ArangoDB.Builder().host("localhost", 8529).user("root").password("").build();
        String query = "FOR t IN commits RETURN t";
        ArangoCursor<BaseDocument> cursor = arangodb.db("binocular-Binocular").query(query, BaseDocument.class, null, null);
        while(cursor.hasNext()) pnl.add(new JLabel(cursor.next().getAttribute("signature").toString()));
    }
    */
}