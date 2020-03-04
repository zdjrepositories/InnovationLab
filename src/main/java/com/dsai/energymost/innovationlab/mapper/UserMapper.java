package com.dsai.energymost.innovationlab.mapper;


import com.dsai.energymost.innovationlab.pojo.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {
    /**
     *
     * 查询全部User
     * @return
     */
    @Select("select count(*) from user where email =#{email} and `password`=#{password} ")
    Integer selectUser(User user);
    @Select("select count(*) from user where email =#{email}")
    Integer selectEmail(User user);
}

