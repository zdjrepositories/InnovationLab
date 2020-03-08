FROM java:8
RUN mkdir /data
ADD innovationlab.war /data/
ENTRYPOINT ["java", "-jar", "/data/innovationlab.war"]
