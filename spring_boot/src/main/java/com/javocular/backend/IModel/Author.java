package com.javocular.backend.IModel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Author {
    @JsonProperty
    public String login;
    @JsonProperty
    public long id;
    @JsonProperty
    public String node_id;
    @JsonProperty
    public String avatar_url;
    @JsonProperty
    public String gravatar_id;
    @JsonProperty
    public String url;
    @JsonProperty
    public String html_url;
    @JsonProperty
    public String followers_url;
    @JsonProperty
    public String following_url;
    @JsonProperty
    public String gists_url;
    @JsonProperty
    public String starred_url;
    @JsonProperty
    public String subscriptions_url;
    @JsonProperty
    public String organizations_url;
    @JsonProperty
    public String repos_url;
    @JsonProperty
    public String events_url;
    @JsonProperty
    public String received_events_url;
    @JsonProperty
    public String type;
    @JsonProperty
    public boolean site_admin;
    @JsonProperty
    public String name;

}