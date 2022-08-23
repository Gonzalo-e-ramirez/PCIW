package ar.com.edu.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Tarjeta {
    @Id
    private Long id;
    private int numero;
    private float fechaVen;
    private int numPriv;

    public Tarjeta(Long id, int numero, float fechaVen, int numPriv) {
        this.id = id;
        this.numero = numero;
        this.fechaVen = fechaVen;
        this.numPriv = numPriv;
    }

    public Tarjeta() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public float getFechaVen() {
        return fechaVen;
    }

    public void setFechaVen(float fechaVen) {
        this.fechaVen = fechaVen;
    }

    public int getNumPriv() {
        return numPriv;
    }

    public void setNumPriv(int numPriv) {
        this.numPriv = numPriv;
    }
}


