package  com.yulongbb.dto;

import java.util.List;

import com.yulongbb.model.Address;
import io.swagger.annotations.ApiModelProperty;
import com.yulongbb.model.Role;

public class UserDataDTO {

  @ApiModelProperty(position = 0)
  private Integer id;
  @ApiModelProperty(position = 1)
  private String userName;
  @ApiModelProperty(position = 2)
  private String password;
  @ApiModelProperty(position = 3)
  private String email;
  @ApiModelProperty(position = 4)
  List<Role> roles;
  @ApiModelProperty(position = 5)
  private String firstName;

  @ApiModelProperty(position = 6)
  private String lastName;

  @ApiModelProperty(position = 7)
  private String age;

  @ApiModelProperty(position = 8)
  private Address address;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public List<Role> getRoles() {
    return roles;
  }

  public void setRoles(List<Role> roles) {
    this.roles = roles;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getAge() {
    return age;
  }

  public void setAge(String age) {
    this.age = age;
  }

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }

}
