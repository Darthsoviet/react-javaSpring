/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.data.ItemDao;
import com.example.demo.dominio.Item;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author silve
 */
@RestController
public class RestService {

    @Autowired
    private ItemDao item;

    // ______________________________________________________________________________________________________________________

    @RequestMapping(produces = "application/json", method = RequestMethod.GET, path = "/")
    public ResponseEntity<String> bienvenida() {

        return ResponseEntity.ok().body("Hola mundo");

    }

    @CrossOrigin(allowCredentials = "true", allowedHeaders = "*", methods = { RequestMethod.DELETE, RequestMethod.POST,
            RequestMethod.GET, RequestMethod.OPTIONS, RequestMethod.PUT }, origins = "*")

    @RequestMapping(value = "/api/item", method = RequestMethod.GET, produces = "application/json")

    public ResponseEntity<List<Item>> getData() {

        List<Item> items = (List<Item>) item.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(items);
    }

    @CrossOrigin(allowCredentials = "true", allowedHeaders = "*", methods = { RequestMethod.DELETE, RequestMethod.POST,
            RequestMethod.GET, RequestMethod.OPTIONS, RequestMethod.PUT }, origins = "*")

    @RequestMapping(value = "/api/item", method = RequestMethod.PUT, produces = "application/json")

    public ResponseEntity<Item> putData(@RequestBody Item item) {
        this.item.save(item);

        return ResponseEntity.status(HttpStatus.OK).body(item);
    }

    @CrossOrigin(allowCredentials = "true", allowedHeaders = "*", methods = { RequestMethod.DELETE, RequestMethod.POST,
            RequestMethod.GET, RequestMethod.OPTIONS, RequestMethod.PUT }, origins = "*")

    @RequestMapping(value = "/api/item/{id}", method = RequestMethod.GET, produces = "application/json")

    public Item getData(@PathVariable String id) {
        Item item = new Item();
        item.setIdItem(id);

        Optional<Item> retorno = this.item.findById(item.getIdItem());
        return retorno.get();
    }



    
    @CrossOrigin(allowCredentials = "true", allowedHeaders = "*", methods = { RequestMethod.DELETE, RequestMethod.POST,
            RequestMethod.GET, RequestMethod.OPTIONS, RequestMethod.PUT }, origins = "*")


    @RequestMapping(value = "/api/item/{id}", method = RequestMethod.DELETE, produces = "application/json")

    public ResponseEntity<String> deleteData(@PathVariable String id) {

        Item itemTemp=new Item();
        itemTemp.setIdItem(id);
        Optional<Item> retorno=this.item.findById(itemTemp.getIdItem());
        this.item.delete(retorno.get());
      
        
        return ResponseEntity.status(HttpStatus.OK).body(id);
    }

    @CrossOrigin(allowCredentials = "true", allowedHeaders = "*", methods = { RequestMethod.DELETE, RequestMethod.POST,
            RequestMethod.GET, RequestMethod.OPTIONS, RequestMethod.PUT }, origins = "*")
    @RequestMapping(value = "/api/item", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")

    public ResponseEntity<Item> postData(@RequestBody Item item) {
        item.setIdItem(item.getNombre());
        item = this.item.save(item);
        return new ResponseEntity<Item>(item, HttpStatus.CREATED);

    }

    @CrossOrigin(allowCredentials = "true", allowedHeaders = "*", methods = { RequestMethod.DELETE, RequestMethod.POST,
            RequestMethod.GET, RequestMethod.OPTIONS, RequestMethod.PUT }, origins = "*")
    @RequestMapping(value = "/api/item", method = RequestMethod.OPTIONS)

    public ResponseEntity<Object> options() {
        return ResponseEntity.ok().build();
    }

}
