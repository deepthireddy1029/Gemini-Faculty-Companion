// package edu.slu.geminifaculty.my_backend.repository;

// import edu.slu.geminifaculty.my_backend.model.User;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
// import java.util.Optional;

// public interface UserRepository extends JpaRepository<User, Long> {

// Optional<User> findByEmail(String email);

// boolean existsByAdminSecretId(String adminSecretId);
// }
// as per github
package edu.slu.geminifaculty.my_backend.repository;

import edu.slu.geminifaculty.my_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);
}