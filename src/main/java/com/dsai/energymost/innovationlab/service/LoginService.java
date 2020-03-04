package com.dsai.energymost.innovationlab.service;

import com.dsai.energymost.innovationlab.pojo.Demo;
import com.dsai.energymost.innovationlab.pojo.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LoginService {

	int userLogin(User user);
} 
