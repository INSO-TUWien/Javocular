package com.javocular.backend.IModel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Mention {

    @JsonProperty
    public String commit;
    @JsonProperty
    public String createdAt;
    @JsonProperty
    public boolean closes;
}
