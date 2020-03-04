package com.dsai.energymost.innovationlab.mapper;

import com.dsai.energymost.innovationlab.pojo.Visit;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface VisitMapper {
    /**
     *
     * @return
     */
    @Select("select visit from visit where id=1")
    Visit selectVisit();

    /**
     *
     * @return
     */
    @Update("update visit set visit=#{visit}  where id=1")
     void updateVisit(Visit visit);
}
