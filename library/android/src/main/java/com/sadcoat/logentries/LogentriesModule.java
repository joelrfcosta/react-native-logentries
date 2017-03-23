package com.sadcoat.logentries;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;

import java.io.IOException;

import com.logentries.logger.AndroidLogger;

public class LogentriesModule extends ReactContextBaseJavaModule {
    private AndroidLogger logger = null;
    private String token = null;

    public LogentriesModule(ReactApplicationContext reactContext) {
        super(reactContext);             
    }

    @Override
    public String getName() {
        return "Logentries";
    }

    @ReactMethod
    public void setToken(String token) throws IOException {
        if (this.token != token) {
            this.logger = AndroidLogger.createInstance(getReactApplicationContext(), false, false, false, null, 0, token, false);
            this.token = token;
        }
    }

    @ReactMethod
    public void log(String data) {
        if (this.logger != null) {
            this.logger.log(data);
        }
    }
}