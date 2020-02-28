package com.example.demo.controller;

import com.example.demo.models.Item;
import com.example.demo.models.PagingResult;
import com.example.demo.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;


@RestController
public class ItemsController {

    @Autowired
    ItemService itemService; //Service which will do all data retrieval/manipulation work

    // -------------------Retrieve All Items---------------------------------------------
    @GetMapping(value = "/items")
    public List<Item> getItems (HttpServletResponse response) {
        response.setHeader("Cache-Control", "public,max-age=28800");
        List<Item> items = itemService.findAll();
        return items;
    }

    // -------------------Delete Item ---------------------------------------------
    @DeleteMapping(path = { "/items/{id}" })
    public Item delete(@PathVariable("id") long id) {
        Item deletedItem = null;
        deletedItem = itemService.findById(id);
        itemService.delete(deletedItem);
        return deletedItem;
    }


    // -------------------Get Items with Paging  ---------------------------------------------
    @RequestMapping(value="/itemsToPage", method = RequestMethod.GET)
    public PagingResult findItemsWithPaging(HttpServletResponse response,  @RequestParam() Integer pageIndex,
                                            @RequestParam() Integer pageSize,
                                            @RequestParam() String column,
                                            @RequestParam() String direction
    )
    {
        response.setHeader("Cache-Control", "public,max-age=28800");
        List<Item> items=itemService.findAll();

        //for demo purpose..replace with DB paging and sort in enterprise application.
        //First sort based on the column name and direction.
        /**Pageable pageable = PageRequest.of(pageIndex, pageSize);
         //Page<Item> pagedResult = repository.findAll(paging); //paging on the database side.
         Page<Item> pages = new PageImpl<Item>(items, paging, items.size());
         List<Item> pagedContent = pages.getContent();
         */

        itemService.sortItems(items,column,direction);
        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        long start = pageable.getOffset();
        long end = (start + pageable.getPageSize()) > items.size() ? items.size() : (start + pageable.getPageSize());
        Page<Item> pages = new PageImpl<Item>(items.subList((int)start, (int)end), pageable, items.size());
        List<Item> pagedContent = pages.getContent();

        PagingResult<Item> result = new PagingResult();
        result.setData(pagedContent);
        result.setTotal(items.size());
        return result;

    }


    @PostMapping("/items")
    public Item createItem(@RequestBody Item item) {
        itemService.addItem(item);
        return item;
    }


    @PostMapping(value = "/items/upload")
    @ResponseStatus(HttpStatus.OK)
    public List<Item> handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException  {
        List<Item> items = itemService.uploadItems(file);
        return items;
    }




}
