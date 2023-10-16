package javocular;

import java.awt.*;
import com.arangodb.entiy.BaseDocument;

public class Main{
    //private static Frame frame;
    //private static ArangoDB arangodb;

    public static void main(String[] args) {
        Frame f = new Frame(null, null);
        f.setSize(400, 300);
        f.setVisible(true);
        
        /*arangodb = new ArangoDB.Builder().host("localhost", 8529).password("").build();
            EventQueue.invokeLater(() -> {
            try {
                frame = new Frame();
                frame.setSize(400, 300);
                frame.setVisible(true);
    
                String query = "FOR t IN commits RETURN t.signature";
                ArangoCursor<BaseDocument> cursor = arangodb.db("binocular-Binocular").query(query, BaseDocument.class, null, null);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });*/
    }
}