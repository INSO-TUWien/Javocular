package com.javocular.backend;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Collections;

@Controller
public class RESTController {

    @RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String greeting() {
        var lel = new RequestImplement().CIMRDiagram(new String[]{"commits"}, Collections.singletonList("Roman Decker <roman.decker@gmail.com>"));
        var lol = new String("{ \n");

        for(var pair : lel.entrySet()) {
            lol += "\t\"" + pair.getKey() + '"' + ": {\n";
            lol += "\t\t\"" + "Commits" + '"' + ": " + Integer.valueOf(pair.getValue()[0]).toString() + ",\n";
            lol += "\t\t\"" + "Issues" + '"' + ": " + Integer.valueOf(pair.getValue()[1]).toString() + ",\n";
            lol += "\t\t\"" + "Merge Requests" + '"' + ": " + Integer.valueOf(pair.getValue()[2]).toString();
            lol += "\n\t},\n\n";
        }
        lol = lol.substring(0, lol.length() - 3);
        lol += "\n}";

        return lol;
}
}