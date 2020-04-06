/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.dominio;

import java.io.Serializable;
import javax.persistence.*;
import lombok.Data;


/**
 *
 * @author silve
 */
@Data
@Entity
@Table(name ="item")
public class Item implements Serializable {
    
    public static final long serialVersionUID=1L;
    
    @Id
    @Column(name = "id_item")
    private String idItem;
    private double precio;
    private int cantidad;
    private String descripcion;
    private String nombre;
    
}
 