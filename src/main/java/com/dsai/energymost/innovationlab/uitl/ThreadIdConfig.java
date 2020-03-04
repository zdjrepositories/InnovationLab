package com.dsai.energymost.innovationlab.uitl;

import ch.qos.logback.classic.pattern.ClassicConverter;
import ch.qos.logback.classic.spi.ILoggingEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 */
public class ThreadIdConfig extends ClassicConverter {
    private static final Logger logger = LoggerFactory.getLogger(ThreadIdConfig.class);
    private static String threadId;
    static {
        try {
            threadId = Thread.currentThread().getId()+"";
        } catch (Exception e) {
            logger.error("获取日志threadId异常", e);
            threadId = null;
        }
    }

    @Override
    public String convert(ILoggingEvent event) {
        return threadId;
    }
}