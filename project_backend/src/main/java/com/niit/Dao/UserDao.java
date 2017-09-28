

package com.niit.Dao;

import com.niit.model.User;

public interface UserDao {
void registration(User user);
boolean isEmailValid(String email);
boolean isUsernameValid(String username);
User login(User user);
User getUserByUsername(String username);
void updateUser(User validUser);
}