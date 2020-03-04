package com.dsai.energymost.innovationlab.controller;

import com.dsai.energymost.innovationlab.pojo.User;
import com.dsai.energymost.innovationlab.service.LoginService;
import com.dsai.energymost.innovationlab.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("innovationlab")
@ResponseBody
public class LoginController {
    @Autowired
    private LoginService loginService;
    private User user=null;
    @PostMapping("/getEmail")
    @ResponseBody
    public String getEmail(HttpServletRequest req, HttpServletResponse res) {
        user = new User();
        user.setEmail(req.getParameter("email"));
        int email = loginService.getEmail(user);
        return email+"";
    }
    @PostMapping("/login")
    @ResponseBody
    public String userLogin(HttpServletRequest req, HttpServletResponse res) {
        HttpSession session = req.getSession();
        user = new User();
        user.setEmail(req.getParameter("email"));
        user.setPassword(req.getParameter("password"));
        int login = loginService.userLogin(user);
        if(login==1){
            session.setAttribute("user",user.getEmail());
        }
        return login+"";
    }
    @RequestMapping(value = "/getUser",method = RequestMethod.GET)
    @ResponseBody
    public String getUser(HttpServletRequest req, HttpServletResponse res) {
        HttpSession session = req.getSession();
        if(session!=null && !session.equals("")){
            if(session.getAttribute("user")!=null && !session.getAttribute("user").equals("")){
                return session.getAttribute("user").toString();
            }

        }
        return "";
    }
    @RequestMapping(value = "/exitUser",method = RequestMethod.GET)
    @ResponseBody
    public String exitUser(HttpServletRequest req, HttpServletResponse res) {
        HttpSession session = req.getSession();
        if(session!=null && !session.equals("")){

                session.setAttribute("user",null);

        }
        return "";
    }

    @RequestMapping(value = "/getDemo",method = RequestMethod.GET)
    @ResponseBody
    public String getDemo(HttpServletRequest req, HttpServletResponse res) {
        HttpSession session = req.getSession();
        if(session!=null && !session.equals("")) {
            if (session.getAttribute("user") != null && !session.getAttribute("user").equals("")) {
                int id = Integer.parseInt(req.getParameter("demo"));
                switch (id) {
                    case 1:
                        return "demo/demo1.html";
                    case 2:
                        return "demo/demo2.html";
                    case 3:
                        return "http://118.31.229.62:8059";
                    case 4:
                        return "http://118.31.229.62:8053";
                    case 5:
                        return "http://118.31.229.62:8060";
                    case 6:
                        break; //可选
                    case 7:
                        return "http://118.31.229.62:8055";
                    case 8:
                        return "http://118.31.229.62:8051";
                }
            }
        }
        return "";
    }
}

