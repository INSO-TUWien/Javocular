package com.javocular.backend;

import com.javocular.backend.OModel.CIMROutput;

import java.util.HashMap;
import java.util.List;

public interface Requests {
    public CIMROutput CIMRDiagram(String[] tables, List<String> exlAuths);
}
