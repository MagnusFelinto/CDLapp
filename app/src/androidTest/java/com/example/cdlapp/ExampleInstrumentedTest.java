/*package com.example.cdlapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
//public class MainActivity extends AppCompatActivity {
 *//*
    WebView webView;
    String  IPAddress ="192.168.1.8";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.myWebView);
        WebSettings webSettings = webView.getSettings() ;
        webSettings.setJavaScriptEnabled(true);
        webSettings.setBuiltInZoomControls(false);



        webView.setWebViewClient(new Callback());

        WebSettings mWebSettings = webView.getSettings();
        mWebSettings.setJavaScriptEnabled(true); // Done above
        mWebSettings.setDomStorageEnabled(true); // Try
        mWebSettings.setSupportZoom(false);
        mWebSettings.setAllowFileAccess(true);
        mWebSettings.setAllowContentAccess(true);


        webView.loadUrl("http://localhost:8080");// "file:///android_asset/index.html"); //http://localhost:8080 //file:///android_asset/index.html
        //IP: 192.168.1.8
        //
    }
    private class Callback extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            return false;//super.shouldOverrideUrlLoading(view, url);
        }
    }

    @Override
    public void onBackPressed() {
        if(webView   != null && webView.canGoBack()){

        }
        else{
            super.onBackPressed();
        }

        super.onBackPressed();
    }
}


*/