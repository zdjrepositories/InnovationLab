package com.dsai.energymost.innovationlab.service.impl;

import com.dsai.energymost.innovationlab.mapper.DemoMapper;
import com.dsai.energymost.innovationlab.pojo.Demo;
import com.dsai.energymost.innovationlab.service.LikeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Transactional
@Resource
@Service
public class LikeServiceImpl implements LikeService {

    @Resource
    private DemoMapper demoMapper;


    /**
     * 获取demo点赞数
     *
     * @param id
     * @return
     */
    @Override
    public Long getLike(int id) {
        return demoMapper.selecctDemoByID(id).getlike();
    }

    /**
     * demo点赞
     *
     * @param id
     */
    @Override
    public Long givelike(int id) {
        Demo demo=demoMapper.selecctDemoByID(id);
        demo.setlike(demo.getlike()+1);
        demoMapper.updateDemo(demo);
        return demo.getlike();
    }
}
