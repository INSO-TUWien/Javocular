package com.javocular.backend;

import org.slf4j.event.KeyValuePair;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

@Controller
public class TestController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public @ResponseBody String greeting() {
        return "Hello";
    }
}