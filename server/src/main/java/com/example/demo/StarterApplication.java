package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

//Have the main class in root package.
@SpringBootApplication
public class StarterApplication extends SpringBootServletInitializer {

	//This is necessary to deploy to external app server like tomcat.
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(StarterApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(StarterApplication.class, args);
	}



}
