package com.dsai.energymost.innovationlab.service.impl;

import com.dsai.energymost.innovationlab.mapper.VersionMapper;
import com.dsai.energymost.innovationlab.pojo.Version;
import com.dsai.energymost.innovationlab.service.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class VersionServiceImpl implements VersionService {


    @Autowired
    private VersionMapper versionMapper;

    @Override
    public int updateVersion(Version version) {
        return 0;
    }

    @Override
    public List<Version> selectVersionAll() {
        return versionMapper.selectVersionAll();
    }

    @Override
    public Version selectVersion() {
        return versionMapper.selectVersion();
    }
}
