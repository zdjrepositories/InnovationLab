package com.dsai.energymost.innovationlab.service.impl;

import com.dsai.energymost.innovationlab.mapper.VisitMapper;
import com.dsai.energymost.innovationlab.pojo.Visit;
import com.dsai.energymost.innovationlab.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


@Transactional
@Resource
@Service
public class VisitServiceImpl implements VisitService {
    @Autowired
    private VisitMapper visitMapper;

    /**
     *
     */
    @Override
    public Long getVisit() {
        Visit visit= visitMapper.selectVisit();
        return visit.getVisit();
    }

    @Override
    public Visit setVisit() {
        Visit visit= visitMapper.selectVisit();
        visit.setVisit(visit.getVisit()+1);
        visitMapper.updateVisit(visit);
        return visit;
    }
}
