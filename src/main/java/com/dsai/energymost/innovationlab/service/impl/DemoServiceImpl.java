package com.dsai.energymost.innovationlab.service.impl;

import com.dsai.energymost.innovationlab.mapper.DemoMapper;
import com.dsai.energymost.innovationlab.pojo.Demo;
import com.dsai.energymost.innovationlab.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional
public class DemoServiceImpl implements DemoService {
	@Autowired
	private DemoMapper demoMapper;

	@Override
	public int addDemo(Demo demo) {
		int re=0;
		this.demoMapper.insertDemo(demo);
		return re;
	}

	@Override
	public List<Demo> selectDemoAll() {
		return this.demoMapper.selectDemoAll();
	}

	@Override
	public Demo findDemoByName(String name) {
		return this.demoMapper.selectDemoByName(name);
	}

	@Override
	public int updateDemo(Demo demo) {
		int re=0;
		this.demoMapper.updateDemo(demo);
		return re;

	}

	/**
	 * 查询Demo
	 *
	 * @param id
	 * @return
	 */
	@Override
	public Demo selectDemo(int id) {
		return demoMapper.selecctDemoByID(id);
	}

	/**
	 *
	 * @param name
	 * @return -1 未找到该demo，0 删除失败，1 删除成功
	 */
	@Override
	public int deleteDemoByName(String name) {
		int re=0;
		if((findDemoByName(name))==null || findDemoByName(name).equals("")){
			re=-1;
		}
		else{
			this.demoMapper.deleteDemoByName(name);
		}
		return re;
	}

	/**
	 * 删除Demo
	 *
	 * @param id
	 * @return
	 */
	@Override
	public Demo deleteDemoByName(int id) {
		return null;
	}
}
