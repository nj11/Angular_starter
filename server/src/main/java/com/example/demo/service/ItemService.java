package com.example.demo.service;

import com.example.demo.models.Item;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ItemService {

    List<Item> items = new ArrayList<Item>();
    private static  long LAST_INDEX  = 10;

    public ItemService(){
        this.items = createItems();
    }

    /**
     * Find by ID.
     * @param id
     * @return
     */
    public Item findById(long id){
            for(Item item : items){
                if(item.getId() == id) return  item;
            }
        return null;
    }


    public void addItem(Item item){
        LAST_INDEX=LAST_INDEX+1;
        item.setId(LAST_INDEX);
        this.items.add(item);
    }

    /**
     * Find all items.
     * @return
     */
    public List<Item> findAll(){
       return  this.items;
    }

    /**
     * Upload items from UI to backend server
     * @param file
     */
    public List<Item> uploadItems(MultipartFile file) throws IOException {
        FileInputStream fs = (FileInputStream)file.getInputStream();
        BufferedReader br = new BufferedReader(new InputStreamReader(fs));
        List<Item> items = new ArrayList<Item>();
        items = br.lines().skip(1).map(mapToItem).collect(Collectors.toList());
        br.close();
        fs.close();
        System.out.println("Items uploaded :: " + items.size());
        this.items = items;
        return this.items;

    }

    private Function<String, Item> mapToItem = (line) -> {
        String[] p = line.split(",");// a CSV has comma separated lines
        Item item = new Item();
        item.setId(new Long(p[0]).longValue());
        item.setItemno(p[1]);
        item.setItemDescription(p[2]);
        item.setCustno(p[3]);
        return item;
    };

    /**
     * Mock data
     * @return
     */
    private List<Item> createItems(){
        List<Item> items = new ArrayList<>();
        items.add(new Item(1,"23079","23183385","18-1/2x12-1/2x9 J56Kraft Corr Box 25/bdl"));
        items.add(new Item(2,"25634","10100258","16x8x6 J50 RSC 32C KraftPlain 25/bundle")) ;
        items.add(new Item(3,"27131","23154295","30x5x24 FOL 32C SideLoading Kraft 20/bd 120/"));
        items.add(new Item(4,"25519","23153162","36x16x16 RSC 32C KraftPlain 15/bundle 120/unit"));
        items.add(new Item(5,"22893","29181076","15x15x10 RSC 32C KraftPlain 25/bundle 250/unit"));
        items.add(new Item(6,"13717","21189679","4x4x28 RSC 32C KraftPlain 25/bundle 625/unit"));
        items.add(new Item(7,"18517","23177492","5x5x2 32B Oyster WhiteCorrugated Mailer"));
        items.add(new Item(8,"26467","20185178","24x5x18 FOL 32C KraftPlain 25/bundle 250/unit"));
        items.add(new Item(9,"24604","20183798","9x6x5 32B Oyster WhiteCorrugated Mailer"));
        items.add(new Item(10,"26890","20142206","8x8x10 No Stack PalletCone White/Red"));
        this.items = items;
        return  items;

    }

    public void delete(Item item){
        items.remove(item);
    }


    public void sortItems(List<Item> items,String column,String direction){
        Comparator<Item> comparator = new Comparator<Item>() {
            @Override
            public int compare(Item o1, Item o2) {
                try {
                    String captitalizedFieldName = column.substring(0, 1).toUpperCase() + column.substring(1);
                    Method m = o1.getClass().getMethod("get" + captitalizedFieldName);
                    Field field = o1.getClass().getDeclaredField(column);
                    if (field.getType().isAssignableFrom(String.class)) {
                        String s1 = (String) m.invoke(o1);
                        String s2 = (String) m.invoke(o2);
                        return s1.compareTo(s2);
                    } else {
                        long id1 = (long)m.invoke(o1);
                        long id2 = (long)m.invoke(o2);
                        return Long.valueOf(id1).compareTo(Long.valueOf(id2));
                    }

                } catch (SecurityException e) {
                    throw new RuntimeException(e);
                } catch (NoSuchMethodException e) {
                    throw new RuntimeException(e);
                } catch (IllegalAccessException e) {
                    throw new RuntimeException(e);
                } catch (InvocationTargetException e) {
                    throw new RuntimeException(e);
                } catch (NoSuchFieldException e) {
                    throw new RuntimeException(e);
                }

            }
        };

        if(direction == null || direction.trim().equals(""))
            direction = "asc";

        if(direction.equals("desc"))
            comparator = comparator.reversed();

        Collections.sort(items,comparator);

    }

}
