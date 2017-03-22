package com.sadcoat.logentries;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;

public class LogentriesModule extends ReactContextBaseJavaModule {
    public LogentriesModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Logentries";
    }

    @ReactMethod
    public void log(String data) {
        //Log("Test Logentries");
    }
}