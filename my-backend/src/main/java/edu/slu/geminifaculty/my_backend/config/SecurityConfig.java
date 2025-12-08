// package edu.slu.geminifaculty.my_backend.config;

// import lombok.RequiredArgsConstructor;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.AuthenticationProvider;
// import
// org.springframework.security.authentication.dao.DaoAuthenticationProvider;
// import
// org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import
// org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// import org.springframework.beans.factory.annotation.Autowired;

// @Configuration
// public class SecurityConfig {

// @Autowired
// private JwtAuthFilter jwtAuthFilter;

// @Bean
// public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

// http
// .csrf(csrf -> csrf.disable())
// .cors(cors -> {
// })
// .sessionManagement(session ->
// session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
// .authorizeHttpRequests(auth -> auth
// .requestMatchers(
// "/api/auth/login",
// "/api/auth/register",
// "/error")
// .permitAll()
// .anyRequest().authenticated())
// .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

// return http.build();
// }

// @Bean
// public PasswordEncoder passwordEncoder() {
// return new BCryptPasswordEncoder();
// }
// }
// updated as per github
// package edu.slu.geminifaculty.my_backend.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecurityConfig {

// @Bean
// public SecurityFilterChain securityFilterChain(HttpSecurity http) throws
// Exception {
// // Configure authorization for specific requests
// http.authorizeHttpRequests(authorize -> authorize
// // Allow unauthenticated access to the test endpoint
// .requestMatchers("/api/test").permitAll()
// // All other requests require authentication
// .anyRequest().authenticated()
// )
// // Disable CSRF protection for testing purposes (common in stateless APIs)
// .csrf(csrf -> csrf.disable());

// return http.build();
// }

// // You may also need a PasswordEncoder bean here, depending on your setup.
// }

// package edu.slu.geminifaculty.my_backend.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import
// org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

// // 1. PasswordEncoder Bean (Previously added, required for hashing)
// @Bean
// public PasswordEncoder passwordEncoder() {
// return new BCryptPasswordEncoder();
// }

// // 2. Security Filter Chain Bean
// @Bean
// public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
// http
// // Disable CSRF for state-less REST APIs
// .csrf(AbstractHttpConfigurer::disable)

// // Set session management to state-less
// .sessionManagement(session ->
// session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

// .authorizeHttpRequests(auth -> auth
// // Allow public access to the registration and login endpoints
// .requestMatchers("/api/auth/register", "/api/auth/login").permitAll()

// // You can use AntPathRequestMatcher for more flexibility with patterns
// // .requestMatchers(new AntPathRequestMatcher("/api/auth/**")).permitAll()

// // All other requests MUST be authenticated
// .anyRequest().authenticated());

// // If you were using JWTs, you would insert your JWT filter here before the
// // UsernamePasswordAuthenticationFilter

// return http.build();
// }
// }

package edu.slu.geminifaculty.my_backend.config;

import lombok.RequiredArgsConstructor;
import edu.slu.geminifaculty.my_backend.service.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;
    private final CustomUserDetailsService customUserDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll()
                        .anyRequest().permitAll() // allow everything else
                )
                .userDetailsService(customUserDetailsService)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000")); // React
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setExposedHeaders(List.of("Authorization"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
