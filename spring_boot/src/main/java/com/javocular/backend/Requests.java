package com.javocular.backend;

import java.util.HashMap;

public interface Requests {

    public HashMap<String, Integer[]> CIMRDiagram(String[] tables, String[] exlAuths);
}
