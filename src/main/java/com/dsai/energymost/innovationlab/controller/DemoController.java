package com.dsai.energymost.innovationlab.controller;

import com.dsai.energymost.innovationlab.pojo.Demo;
import com.dsai.energymost.innovationlab.service.DemoService;
import com.dsai.energymost.innovationlab.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 */
@Controller
@RequestMapping("innovationlab")
@CrossOrigin("*")
public class DemoController {
    @Autowired
    private DemoService demoService;
    @Autowired
    private LikeService likeService;
    @RequestMapping(value = "/showLike", method = RequestMethod.GET)
    @ResponseBody
    //获取点赞数据
    public Map showLike(){
        Map<String,String> likeMap=new HashMap<>();
        List <Demo> list=demoService.selectDemoAll();
        for (int i = 0; i <list.size() ; i++) {
            Demo demo=list.get(i);
            likeMap.put("demo"+list.get(i).getId(),list.get(i).getlike()+"");
        }
        return likeMap;
    }
//点赞
    @RequestMapping(value = "/giveLike", method = RequestMethod.GET)
    public String giveLike(String id){
        likeService.givelike(Integer.valueOf(id));
        return id+"";
    }


}
