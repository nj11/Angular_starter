package com.example.demo.models;

public class Item {

    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCustno() {
        return custno;
    }

    public void setCustno(String custno) {
        this.custno = custno;
    }

    public String getItemno() {
        return itemno;
    }

    public void setItemno(String itemno) {
        this.itemno = itemno;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    private String custno;

    private String itemno;

    private String itemDescription;

    public Item() {
        super();
    }

    public Item(String custno,String itemno,String itemDescription) {
        this.custno = custno;
        this.itemno = itemno;
        this.itemDescription = itemDescription;
    }


    public Item(long id, String custno,String itemno,String itemDescription) {
        this.id = id;
        this.custno = custno;
        this.itemno = itemno;
        this.itemDescription = itemDescription;
    }


}
