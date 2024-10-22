package com.example.demo;

//import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")  // Allow the React client origin
                .allowedMethods("POST", "GET", "PUT", "DELETE", "OPTIONS")  // Allow needed HTTP methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true);  // Allow credentials if needed
    }
}
