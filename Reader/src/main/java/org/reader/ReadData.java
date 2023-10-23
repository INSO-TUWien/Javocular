package org.reader;

import com.arangodb.entity.BaseDocument;

public class ReadData {
    private final BaseDocument content;

    public ReadData() {content = null;}

    public ReadData(BaseDocument data) {content = data;}

    public Object getAttribute(String key) {
        return content == null ? null : content.getAttribute(key);
    }

    public String getAttributeStringified(String key){
        return content == null ? null : String.valueOf(content.getAttribute(key));
    }
}
