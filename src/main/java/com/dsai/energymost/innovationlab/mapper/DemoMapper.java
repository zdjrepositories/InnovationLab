package com.dsai.energymost.innovationlab.mapper;

import com.dsai.energymost.innovationlab.pojo.Demo;
import org.apache.ibatis.annotations.*;
import java.util.List;

@Mapper
public interface DemoMapper {
    /**
     * 添加demo
     * @param demo
     */
    @Insert("insert into Demo(demo_id ,demo_name,demo_auther ,demo_image ,demo_descride,demo_url ,demo_visit ,demo_grade ,demo_like ,demo_dep ,demo_date  ) values( #{id},#{name},#{auther},#{image},#{descride},#{url},#{visit},#{grade},#{like},#{dep},#{date} )  ")
    void insertDemo(Demo demo);
    /**
     * 修改demo
     * @param
     */
    @Update("update demo set demo_name=#{name},demo_auther=#{auther},demo_image=#{image},demo_descride=#{descride},demo_url=#{url},demo_visit=#{visit},demo_grade=#{grade},demo_like=#{like},demo_dep=#{dep},demo_date=#{date}  where demo_id=#{id}")
    void updateDemo(Demo demo);
    /**
     *
     * 查询全部demo
     * @return
     */
    @Select("select demo_id id,demo_name name,demo_auther auther,demo_image image,demo_descride descride,demo_url url,demo_visit visit,demo_grade grade,demo_like 'like',demo_dep dep,demo_date date from demo ")
    List<Demo> selectDemoAll();

    /**
     * 通过demo名查询
     * @param name
     * @return
     */
    @Select("select demo_id id,demo_name name,demo_auther auther,demo_image image,demo_descride descride,demo_url url,demo_visit visit,demo_grade grade,demo_like like,demo_dep dep,demo_date date from demo where demo_name=#{name} ")
    Demo selectDemoByName(String name);
    /**
     * 通过demo名删除
     * @param name
     * @return
     */
    @Delete("delete from demo where demo_name=#{name}")
    void deleteDemoByName(String name);
    /**
     * 通过demo id删除
     * @param id
     * @return
     */
    @Delete("delete from demo where demo_id=#{id}")
    void deleteDemoById(int id);
    /**
     * 通过demo id查询
     * @param id
     * @return
     */
    @Select("select demo_id id,demo_name name,demo_auther auther,demo_image image,demo_descride descride,demo_url url,demo_visit visit,demo_grade grade,`demo_like` `like`,demo_dep dep,demo_date date from demo where demo_id=#{id} ")
    Demo selecctDemoByID(int id);
}

