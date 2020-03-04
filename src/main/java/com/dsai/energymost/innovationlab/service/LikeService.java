package com.dsai.energymost.innovationlab.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public interface LikeService {
//    /**
//     * 获取全部demo点赞数
//     * @return
//     */
//    public ArrayList <Integer> getAllLikes();

    /**
     * 获取demo点赞数
     * @param id
     * @return
     */
    public Long getLike(int id);

    /**
     * demo点赞
     * @param id
     */
    public Long givelike(int id);
}
