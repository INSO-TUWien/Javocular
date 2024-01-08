package com.javocular.backend;

import java.util.HashMap;
import java.util.List;

public interface Requests {

    public HashMap<String, Integer[]> CIMRDiagram(String[] tables, List<String> exlAuths);
}
