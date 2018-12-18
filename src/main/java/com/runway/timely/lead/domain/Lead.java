package com.runway.timely.lead.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Document
public class Lead {

    @Id
    private String id;

    private Set<Contact> contacts = new HashSet<>();

    private String name;

    private EmbeddedAddress embeddedAddress;

    private EmbeddedSocial embeddedSocial;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Set<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Set<Contact> contacts) {
        this.contacts = contacts;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public EmbeddedAddress getEmbeddedAddress() {
        return embeddedAddress;
    }

    public void setEmbeddedAddress(EmbeddedAddress embeddedAddress) {
        this.embeddedAddress = embeddedAddress;
    }

    public EmbeddedSocial getEmbeddedSocial() {
        return embeddedSocial;
    }

    public void setEmbeddedSocial(EmbeddedSocial embeddedSocial) {
        this.embeddedSocial = embeddedSocial;
    }
}
