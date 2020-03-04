package com.dsai.energymost.innovationlab.service.impl;

import com.dsai.energymost.innovationlab.mapper.DemoMapper;
import com.dsai.energymost.innovationlab.mapper.UserMapper;
import com.dsai.energymost.innovationlab.pojo.Demo;
import com.dsai.energymost.innovationlab.pojo.User;
import com.dsai.energymost.innovationlab.service.DemoService;
import com.dsai.energymost.innovationlab.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {
	@Autowired
	private UserMapper userMapper;


	@Override
	public int userLogin(User user) {
		int login=0;
		login=userMapper.selectUser(user);
		return login;
	}
}
