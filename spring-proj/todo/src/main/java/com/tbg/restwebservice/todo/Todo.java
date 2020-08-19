package com.tbg.restwebservice.todo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Todo {
    @Id
    @GeneratedValue
    private Integer id;

    private String username;
    private String description;
    private boolean isDone;
    private Date dateComp;

//    Required if putting in Request body
    protected Todo(){}

    public Todo(int id, String username, String description, boolean isDone, Date dateComp) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.isDone = isDone;
        this.dateComp = dateComp;
    }

    public Integer getId() { return id; }

    public String getUsername() { return username; }
    
    public String getDescription() {
        return description;
    }

    public boolean getIsDone() {
        return isDone;
    }

    public Date getDateComp() {
        return dateComp;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public void setDateComp(Date dateComp) {
        this.dateComp = dateComp;
    }
}
