package com.dsai.energymost.innovationlab.controller;

import com.dsai.energymost.innovationlab.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@CrossOrigin("*")
@Controller
@RequestMapping("innovationlab")
public class VisitController {
    /**
     * 获取点赞量
     */
    @Autowired
    private VisitService visitService;
    @RequestMapping(value = "/showVisit", method = RequestMethod.GET)
    @ResponseBody
    private String showVisit() {
        return visitService.getVisit().toString();
    }
    @ResponseBody
    @RequestMapping(value = "/giveVisit", method = RequestMethod.GET)
    public String giveVisit(HttpServletRequest req, HttpServletResponse res) {
        res.setHeader("Access-Control-Allow-Origin", req.getHeader("origin"));
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        HttpSession session = req.getSession();
        if(!"1".equals(session.getAttribute("innovationlab"))) {
            visitService.setVisit();
            session.setAttribute("innovationlab","1");
        }
        return visitService.getVisit().toString();
    }

}

