package com.dsai.energymost.innovationlab;

import com.dsai.energymost.innovationlab.service.impl.DemoServiceImpl;
import com.dsai.energymost.innovationlab.service.impl.VersionServiceImpl;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.dsai.energymost.innovationlab.mapper")
@SpringBootApplication
public class InnovationlabApplication {
    public static void main(String[] args) {
        SpringApplication.run(InnovationlabApplication.class, args);
    }
}
