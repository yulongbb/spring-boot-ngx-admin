package com.yulongbb.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.yulongbb.exception.CustomException;
import com.yulongbb.model.User;
import com.yulongbb.repository.UserRepository;
import com.yulongbb.security.JwtTokenProvider;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private JwtTokenProvider jwtTokenProvider;

  @Autowired
  private AuthenticationManager authenticationManager;

  public Map<String, Map<String, String>> signin(String username, String password) {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
      Map<String,  Map<String, String>> data = new HashMap();
      Map<String, String> token = new HashMap();
      token.put("token", jwtTokenProvider.createToken(username, userRepository.findByUsername(username).getRoles()));
      data.put("data", token);
      return data;
    } catch (Exception e) {
      throw new CustomException("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  public Map<String, Map<String, String>>  signup(User user){
    System.out.println(user.toString());
    if (!userRepository.existsByUsername(user.getUsername())) {
      user.setPassword(passwordEncoder.encode(user.getPassword()));
      userRepository.save(user);
      Map<String,  Map<String, String>> data = new HashMap();
      Map<String, String> token = new HashMap();
      token.put("token", jwtTokenProvider.createToken(user.getUsername(), user.getRoles()));
      data.put("data", token);
      return data;
    } else {
      throw new CustomException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  public void delete(String username) {
    userRepository.deleteByUsername(username);
  }

  public User search(String username) {
    User user = userRepository.findByUsername(username);
    if (user == null) {
      throw new CustomException("The user doesn't exist", HttpStatus.NOT_FOUND);
    }
    return user;
  }

  public User whoami(HttpServletRequest req) {
    return userRepository.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));
  }

  public String refresh(String username){
    return jwtTokenProvider.createToken(username, userRepository.findByUsername(username).getRoles());
  }

}
