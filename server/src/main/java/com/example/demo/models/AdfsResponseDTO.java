package com.example.demo.models;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AdfsResponseDTO {


    private String audience;
    private String authority;
    private String tenant;

    Logger logger = LoggerFactory.getLogger(AdfsResponseDTO.class);

    public AdfsResponseDTO(String audience,String authority,String tenant){
        this.audience=audience;
        this.authority=authority;
        this.tenant=tenant;
    }

    //GETTERS AND SETTERS.
    public String getAudience() {
        return audience;
    }

    public void setAudience(String audience) {
        this.audience = audience;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public String getTenant() {
        return tenant;
    }

    public void setTenant(String tenant) {
        this.tenant = tenant;
    }


}
