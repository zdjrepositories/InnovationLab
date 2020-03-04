package com.dsai.energymost.innovationlab.mapper;



import com.dsai.energymost.innovationlab.pojo.Version;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;


@Mapper
public interface VersionMapper {

    /**
     *查询最新版本
     * @return
     */
    @Select("select version_id id,version_inside inside,version_date date,version_descride descride from version where version_id = (SELECT MAX( version_id ) from version )")
    Version selectVersion();

    /**
     * 查询全部迭代
     * @return
     */
    @Select("select version_id id,version_inside inside,version_date date,version_descride descride  from version")
    List<Version> selectVersionAll();

    /**
     * 修改迭代信息
     * @return
     */

}
