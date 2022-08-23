package ar.com.edu.entities;

import javax.persistence.*;

@Entity
public class User {
    @Id
    private Long dni;
    private String name;
    private String surname;
    private String email;
    private String userName;
    private String password;

    public User() {

    }

    public User(Long dni, String name, String surname, String email, String userName, String password) {
        this.dni = dni;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }

    public Long getDni() {
        return dni;
    }

    public void setDni(Long dni) {
        this.dni = dni;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
