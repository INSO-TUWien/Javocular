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

    private static JFrame frame;
    private static ArangoDB arangodb;

        public static void main(String[] args) {
            arangodb = new ArangoDB.Builder().host("localhost", 8529).user("root").password("").build();
            EventQueue.invokeLater(() -> {
                try {
                    frame = new JFrame();
                    JPanel pnl = new JPanel();
                    pnl.setBackground(Color.WHITE);
                    frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                    frame.setSize(400, 300);
                    frame.setContentPane(pnl);
                    frame.setLayout(new FlowLayout());
                    frame.setVisible(true);

                    String query = "FOR t IN commits RETURN t";
                    ArangoCursor<BaseDocument> cursor = arangodb.db("binocular-Binocular").query(query, BaseDocument.class, null, null);
                    while(cursor.hasNext()) pnl.add(new JLabel(cursor.next().getAttribute("signature").toString()));
                } catch (Exception e) {
                    System.exit(1);
                }
            });
        }
    }


}