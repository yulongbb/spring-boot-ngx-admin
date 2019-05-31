package  com.yulongbb.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yulongbb.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

  boolean existsByUserName(String username);

  User findByUserName(String username);

  @Transactional
  void deleteByUserName(String username);

}
