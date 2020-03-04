package com.dsai.energymost.innovationlab.service;

import java.util.List;

import com.dsai.energymost.innovationlab.pojo.Demo;
import org.springframework.stereotype.Service;

@Service
public interface DemoService {
	/**
	 * 添加Demo
	 * @param demo
	 * @return
	 */
	int addDemo(Demo demo);

	/**
	 * 按Demo名查询
	 * @param name
	 * @return
	 */
	Demo findDemoByName(String name);

	/**
	 * 修改Demo
	 * @param demo
	 * @return
	 */
	int updateDemo(Demo demo);
	/**
	 * 查询Demo
	 * @param id
	 * @return
	 */
	Demo selectDemo(int id);
	/**
	 * 查询所有Demo
	 * @return
	 */
	List <Demo> selectDemoAll();
	/**
	 * 删除Demo
	 * @param name
	 * @return
	 */
	int deleteDemoByName(String name);
	/**
	 * 删除Demo
	 * @param id
	 * @return
	 */
	Demo deleteDemoByName(int id);

} 
