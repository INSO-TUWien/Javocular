package com.javocular.backend;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Collections;
import java.util.Random;

@Controller
public class RESTController {
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/api/database/cimr", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String CIMR() {
        var result = new RequestImplement().CIMRDiagram(new String[]{"commits", "issues"}, Collections.singletonList("Roman Decker <roman.decker@gmail.com>"));
        return result.stringify();
    }
}