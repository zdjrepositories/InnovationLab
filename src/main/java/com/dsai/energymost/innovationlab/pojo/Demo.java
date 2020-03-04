package com.dsai.energymost.innovationlab.pojo;

public class Demo {
    private int id;
    private String name="";
    private String auther="";
    private String image="";
    private String descride="";
    private String url="";
    private Long visit;
    private Integer grade;
    private Long like;
    private String dep="";
    private String date=null;

    @Override
    public String toString() {
        return "Demo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", auther='" + auther + '\'' +
                ", image='" + image + '\'' +
                ", descride='" + descride + '\'' +
                ", url='" + url + '\'' +
                ", visit=" + visit +
                ", grade='" + grade + '\'' +
                ", like=" + like +
                ", dep='" + dep + '\'' +
                ", date='" + date + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAuther() {
        return auther;
    }
    public void setAuther(String auther) {
        this.auther = auther;
    }
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescride() {
        return descride;
    }

    public void setDescride(String descride) {
        this.descride = descride;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getVisit() {
        return visit;
    }

    public void setVisit(Long visit) {
        this.visit = visit;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public Long getlike() {
        return like;
    }

    public void setlike(Long like) {
        this.like = like;
    }

    public String getDep() {
        return dep;
    }

    public void setDep(String dep) {
        this.dep = dep;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
