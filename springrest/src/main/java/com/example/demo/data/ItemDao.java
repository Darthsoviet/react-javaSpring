/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.data;

import com.example.demo.dominio.Item;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author silve
 */
public interface ItemDao extends CrudRepository<Item, String>{
    
}
