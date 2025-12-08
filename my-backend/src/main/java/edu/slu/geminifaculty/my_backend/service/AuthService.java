// package edu.slu.geminifaculty.my_backend.service;

// import edu.slu.geminifaculty.my_backend.config.JwtUtil;
// import edu.slu.geminifaculty.my_backend.dto.AuthResponse;
// import edu.slu.geminifaculty.my_backend.dto.LoginRequest;
// import edu.slu.geminifaculty.my_backend.dto.RegisterRequest;
// import edu.slu.geminifaculty.my_backend.model.User;
// import edu.slu.geminifaculty.my_backend.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import java.time.LocalDateTime;

// import java.util.List;

// @Service
// public class AuthService {

//     private final UserRepository userRepo;
//     private final PasswordEncoder passwordEncoder;
//     private final JwtUtil jwtUtil;

//     // allowed admin IDs
//     private final List<String> validAdminIDs = List.of("ADM001", "ADM002", "ADM003", "ADM004", "ADM005");

//     public AuthService(UserRepository userRepo,
//             PasswordEncoder passwordEncoder,
//             JwtUtil jwtUtil) {
//         this.userRepo = userRepo;
//         this.passwordEncoder = passwordEncoder;
//         this.jwtUtil = jwtUtil;
//     }

//     public String register(RegisterRequest req) {

//         if (userRepo.findByEmail(req.getEmail()).isPresent()) {
//             return "Email already registered";
//         }

//         if (req.getRole().equals("ADMIN")) {

//             if (req.getAdminSecretId() == null || req.getAdminSecretId().isEmpty()) {
//                 return "Admin Secret ID required";
//             }

//             if (!validAdminIDs.contains(req.getAdminSecretId())) {
//                 return "Invalid Admin Secret ID";
//             }
//         }

//         User user = new User();
//         user.setFirstName(req.getFirstName());
//         user.setLastName(req.getLastName());
//         user.setEmail(req.getEmail());
//         user.setPassword(passwordEncoder.encode(req.getPassword()));
//         user.setDesignation(req.getDesignation());
//         user.setPhoneNumber(req.getPhoneNumber());
//         user.setGender(req.getGender());
//         user.setRole(req.getRole());

//         if (req.getRole().equals("ADMIN")) {
//             user.setAdminSecretId(req.getAdminSecretId());
//         }

//         userRepo.save(user);
//         return "Registration successful";
//     }

//     public AuthResponse login(LoginRequest req) {

//         User user = userRepo.findByEmail(req.getEmail())
//                 .orElse(null);

//         if (user == null) {
//             return null;
//         }

//         if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
//             return null;
//         }

//         String token = jwtUtil.generateToken(user.getId());

//         AuthResponse response = new AuthResponse();
//         response.setToken(token);
//         response.setUserId(user.getId());
//         response.setRole(user.getRole());

//         return response;
//     }
// }
// as per github
package edu.slu.geminifaculty.my_backend.service;

import edu.slu.geminifaculty.my_backend.config.JwtUtil;
import edu.slu.geminifaculty.my_backend.dto.AuthResponse;
import edu.slu.geminifaculty.my_backend.dto.LoginRequest;
import edu.slu.geminifaculty.my_backend.dto.RegisterRequest;
import edu.slu.geminifaculty.my_backend.model.User;
import edu.slu.geminifaculty.my_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public AuthResponse register(RegisterRequest request) {
        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        // Create new user
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setDesignation(request.getDesignation());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setGender(request.getGender());
        user.setRole(request.getRole()); // use role sent from frontend
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        user.setIsActive(true);

        userRepository.save(user);

        // Generate token
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

        return new AuthResponse(
                token,
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole(),
                "Registration successful!");
    }

    public AuthResponse login(LoginRequest request) {
        // Find user by email
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        // Check password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        // Check if user is active
        if (!user.getIsActive()) {
            throw new RuntimeException("Account is deactivated");
        }

        // Generate token
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

        return new AuthResponse(
                token,
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole(),
                "Login successful!");
    }
}