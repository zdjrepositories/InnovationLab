package com.dsai.energymost.innovationlab.pojo;

/**
 *
 */
public class Version {
    private int id; //编号
    private String inside;  //版本号
    private String date;    //更新日期
    private String descride;    // 更新描述

    @Override
    public String toString() {
        return "Version{" +
                "id=" + id +
                ", inside='" + inside + '\'' +
                ", date='" + date + '\'' +
                ", descride='" + descride + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getInside() {
        return inside;
    }

    public void setInside(String inside) {
        this.inside = inside;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescride() {
        return descride;
    }

    public void setDescride(String descride) {
        this.descride = descride;
    }
}
