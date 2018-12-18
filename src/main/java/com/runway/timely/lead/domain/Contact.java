package com.runway.timely.lead.domain;

import java.util.Objects;
import java.util.UUID;

public class Contact {

    private UUID id = UUID.randomUUID();

    private String name;

    private EmbeddedSocial embeddedSocial;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public EmbeddedSocial getEmbeddedSocial() {
        return embeddedSocial;
    }

    public void setEmbeddedSocial(EmbeddedSocial embeddedSocial) {
        this.embeddedSocial = embeddedSocial;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contact contact = (Contact) o;
        return Objects.equals(id, contact.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
