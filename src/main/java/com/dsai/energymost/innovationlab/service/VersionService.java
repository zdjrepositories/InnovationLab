package com.dsai.energymost.innovationlab.service;

import com.dsai.energymost.innovationlab.pojo.Version;

import java.util.List;

public interface VersionService {

    /**
     * 增加更新
     * @param version
     * @return
     */
    int updateVersion(Version version);

    /**
     * 查询全部更新信息
     * @return
     */
    List<Version> selectVersionAll();

    /**
     * 查询当前版本信息
     * @return
     */
    Version selectVersion();

}



