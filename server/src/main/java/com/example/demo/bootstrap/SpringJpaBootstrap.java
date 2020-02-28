package com.example.demo.bootstrap;


import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class SpringJpaBootstrap implements ApplicationListener<ApplicationEvent> {


    @Override
    public void onApplicationEvent(ApplicationEvent applicationEvent) {
        // process event
        if(applicationEvent instanceof ContextRefreshedEvent) {
                loadData();
        }

    }


    private  void loadData() {

    }
}
