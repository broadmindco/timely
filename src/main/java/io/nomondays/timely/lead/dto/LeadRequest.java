package com.runway.timely.lead.dto;


import com.runway.timely.lead.domain.Address;
import com.runway.timely.lead.domain.Contact;
import com.runway.timely.lead.domain.Social;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

public class LeadRequest {

    @NotNull
    private String name;

    @NotNull
    private String status;

    private String imageUrl;

    private Social social;

    private Address address;

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    private Set<Contact> contacts = new HashSet<>();

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Social getSocial() {
        return social;
    }

    public void setSocial(Social social) {
        this.social = social;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Set<Contact> contacts) {
        this.contacts = contacts;
    }

}
