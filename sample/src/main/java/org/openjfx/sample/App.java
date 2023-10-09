package org.openjfx.sample;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.Parent;
import javafx.scene.Scene;
import java.util.*;
import javafx.stage.Stage;
import javafx.scene.control.Label;
import com.arangodb.*;
import com.arangodb.entity.BaseDocument;
import com.arangodb.entity.CollectionEntity;
import com.arangodb.util.RawJson;
import com.fasterxml.jackson.databind.JsonSerializable.Base;

import java.io.IOException;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;
    public static final ArangoDB arangodb = new ArangoDB.Builder().host("localhost", 8529).password("").build();

    @Override
    public void start(Stage stage) throws IOException {
        Group g = new Group();
        try
        {
            String query = "FOR t IN commits RETURN t.signature";
            ArangoCursor<BaseDocument> cursor = arangodb.db("binocular-Binocular").query(query, BaseDocument.class, null, null);
            List<BaseDocument> rem = cursor.asListRemaining();
            for(int i = 0; i < rem.size(); i++)
            {
                rem.get(i).getAttribute("signature");
            }
            g = new Group(rem);
        }
        catch(Exception e)
        {

        }
        scene = new Scene(new Label("Label"), 200, 200);
        scene.getStylesheets().add(getClass().getResource("styles.css").toExternalForm());
        stage.setScene(scene);
        stage.show();
    }

    static void setRoot(String fxml) throws IOException {
        scene.setRoot(loadFXML(fxml));
    }

    private static Parent loadFXML(String fxml) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource(fxml + ".fxml"));
        return fxmlLoader.load();
    }

    public static void main(String[] args) {
        launch();
    }

    /*
    private static void cleanup()
    {
        ArangoDatabase db = App.arangoDB.db("mydb");
        if (db.exists()) db.drop();
    }
    */
}