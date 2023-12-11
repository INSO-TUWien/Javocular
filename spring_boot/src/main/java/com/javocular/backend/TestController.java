package com.javocular.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public @ResponseBody String greeting() {
        Reader reader = new Reader();
        reader.reset("binocular-Binocular");
        return reader.QueryResult("FOR t IN commits RETURN t").get(1);
    }

}