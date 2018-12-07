package com.runway.timely.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.session.web.http.HeaderHttpSessionIdResolver;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Bean
    public HeaderHttpSessionIdResolver httpSessionIdResolver() {
        return new HeaderHttpSessionIdResolver("X-AUTH-TOKEN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .httpBasic()
            .and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers(HttpMethod.POST,"/api/auth").permitAll()
            .anyRequest()
            .fullyAuthenticated()
            .and()
            .sessionManagement()
            .sessionFixation().migrateSession();
    }

}
