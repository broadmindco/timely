package io.nomondays.timely.lead.dto;

import io.nomondays.timely.lead.domain.Address;
import io.nomondays.timely.lead.domain.Contact;
import io.nomondays.timely.lead.domain.Lead;
import io.nomondays.timely.lead.domain.Social;

import java.util.Set;

public class LeadResponse {

    private final String id;
    private final Address address;
    private final Social social;
    private final Set<Contact> contacts;
    private final String name;
    private final String status;
    private final String imageUrl;

    public LeadResponse(Lead lead) {
        this.id = lead.getId();
        this.address = lead.getAddress();
        this.contacts = lead.getContacts();
        this.social = lead.getSocial();
        this.name = lead.getName();
        this.status = lead.getStatus();
        this.imageUrl = lead.getImageUrl();
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public Address getAddress() {
        return address;
    }

    public Social getSocial() {
        return social;
    }

    public Set<Contact> getContacts() {
        return contacts;
    }

    public String getName() {
        return name;
    }
}
