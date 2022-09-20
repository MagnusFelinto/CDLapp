package com.example.cdlapp;

// ESSE AQUI QUE ESTAMOS TESTANDO
import android.app.AlertDialog;
import android.app.DownloadManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.ProgressDialog;
import android.content.ContentResolver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.util.Base64;
import android.util.Log;
import android.webkit.CookieManager;
import android.webkit.DownloadListener;
import android.webkit.JavascriptInterface;
import android.webkit.MimeTypeMap;
import android.webkit.URLUtil;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.FileProvider;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;

public class MainActivity extends AppCompatActivity {

    public WebView webView;
    public String sFileName,sUrl,sUserAgent;
    public class JavaScriptInterface{
        private  String fileMimeType;
        private final Context context;
        public JavaScriptInterface(Context context) {
            this.context = context;
        }

        @RequiresApi(api = Build.VERSION_CODES.O)
        @JavascriptInterface
        public void getBase64FromBlobData(String base64Data) throws IOException {
            convertBase64StringToFileAndStoreIt(base64Data);
        }

        public  String getBase64StringFromBlobUrl(String blobUrl,String mimeType) {
            if(blobUrl.startsWith("blob")){
                fileMimeType = mimeType;
                return "javascript: var xhr = new XMLHttpRequest();" +
                        "xhr.open('GET', '"+ blobUrl +"', true);" +
                        "xhr.setRequestHeader('Content-type','" + mimeType +";charset=UTF-8');" +
                        "xhr.responseType = 'blob';" +
                        "xhr.onload = function(e) {" +
                        "    if (this.status == 200) {" +
                        "        var blobFile = this.response;" +
                        "        var reader = new FileReader();" +
                        "        reader.readAsDataURL(blobFile);" +
                        "        reader.onloadend = function() {" +
                        "            base64data = reader.result;" +
                        "            Android.getBase64FromBlobData(base64data);" +
                        "        }" +
                        "    }" +
                        "};" +
                        "xhr.send();";
            }
            return "javascript: console.log('It is not a Blob URL');";
        }
        @RequiresApi(api = Build.VERSION_CODES.O)
        private void convertBase64StringToFileAndStoreIt(String base64CSV) throws IOException {
            final int notificationId = 1;
            String currentDateTime = DateFormat.getDateTimeInstance().format(new Date());
            String newTime = currentDateTime.replaceFirst(", ","_").replaceAll(" ","_").replaceAll(":","-");
            Log.d("fileMimeType ====> ",fileMimeType);
            MimeTypeMap mimeTypeMap = MimeTypeMap.getSingleton();
            String extension = mimeTypeMap.getExtensionFromMimeType(fileMimeType);
            final File dwldsPath = new File(Environment.getExternalStoragePublicDirectory(
                    Environment.DIRECTORY_DOWNLOADS) + "/" + newTime + "_." + extension);
            String regex = "data:" + fileMimeType + ";base64,";
            byte[] CSVAsBytes = Base64.decode(base64CSV.replaceFirst(regex, ""), 0);
            try {
                FileOutputStream os = new FileOutputStream(dwldsPath);
                os.write(CSVAsBytes);
                os.flush();
                os.close();
            } catch (Exception e) {
                Toast.makeText(context, "FAILED TO DOWNLOAD THE FILE!", Toast.LENGTH_SHORT).show();
                e.printStackTrace();
            }
            if (dwldsPath.exists()) {
                Intent intent = new Intent();
                intent.setAction(android.content.Intent.ACTION_VIEW);
                Uri apkURI = FileProvider.getUriForFile(context,context.getApplicationContext().getPackageName() + ".provider", dwldsPath);
                intent.setDataAndType(apkURI, MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension));
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                PendingIntent pendingIntent = PendingIntent.getActivity(context,1, intent, PendingIntent.FLAG_CANCEL_CURRENT);
                String CHANNEL_ID = "MYCHANNEL";
                final NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
                NotificationChannel notificationChannel= new NotificationChannel(CHANNEL_ID,"name", NotificationManager.IMPORTANCE_LOW);
                Notification notification = new Notification.Builder(context,CHANNEL_ID)
                        .setContentText("You have got something new!")
                        .setContentTitle("File downloaded")
                        .setContentIntent(pendingIntent)
                        .setChannelId(CHANNEL_ID)
                        .setSmallIcon(android.R.drawable.stat_sys_download_done)
                        .build();
                if (notificationManager != null) {
                    notificationManager.createNotificationChannel(notificationChannel);
                    notificationManager.notify(notificationId, notification);
                }
            }
            Toast.makeText(context, "ARQUIVO BAIXADO!\n", Toast.LENGTH_SHORT).show();
        }
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.myWebView);
        WebSettings webSettings = webView.getSettings() ;
        //webSettings.setJavaScriptEnabled(true);
        webSettings.setBuiltInZoomControls(false);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowFileAccess(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setDatabaseEnabled(true);
        webView.getSettings().setDefaultTextEncodingName("utf-8");
        webView.addJavascriptInterface(new JavaScriptInterface(getApplicationContext()), "Android");
        webView.getSettings().setMinimumFontSize(1);
        webView.getSettings().setMinimumLogicalFontSize(1);
        webView.setWebViewClient(new WebViewClient());
        //webView.setWebChromeClient(new WebChromeClient());
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setAllowFileAccess(true);
        webView.getSettings().setPluginState(WebSettings.PluginState.ON);
        webView.loadUrl("file:///android_asset/index.html");
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        webView.setScrollBarStyle(WebView.SCROLLBARS_OUTSIDE_OVERLAY);
        final AlertDialog alertDialog = new AlertDialog.Builder(this).create();
        final ProgressDialog progressBar = ProgressDialog.show(this, "APP CDL", "Carregando...");
        webView.setWebViewClient(new WebViewClient() {
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.i("TAG", "Processing webview url click...");
                view.loadUrl(url);
                return true;
            }
            public void onPageFinished(WebView view, String url) {
                Log.i("TAG", "Finished loading URL: " + url);
                if (progressBar.isShowing()) { progressBar.dismiss();
                }
            }
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                Log.e("TAG", "Error: " + description);
            } });

        /**  webView.setDownloadListener(new DownloadListener() {
        @Override
        public void onDownloadStart(String url, String useragent, String contentdisposition, String mimetype, long contentlength) {
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M)
        {
        if(checkSelfPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED)
        {
        DowloadDialog(url,useragent,contentdisposition,mimetype);
        }
        else
        {
        ActivityCompat.requestPermissions(MainActivity.this,new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},1);
        }
        }
        else
        {
        DowloadDialog(url,useragent,contentdisposition,mimetype);
        }
        }
        }); */



        webView.setDownloadListener(new DownloadListener() {
            public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimetype, long contentLength) {
                Uri webpage = Uri.parse(url);
                if (!url.startsWith("http://") &&
                        !url.startsWith("https://")) {
                    webpage = Uri.parse("http://" + url);
                }
                DownloadManager.Request request = new DownloadManager.Request(
                        webpage);
                request.setMimeType(mimetype);
                String cookies = CookieManager.getInstance().getCookie(url);
                request.addRequestHeader("cookie", cookies);
                request.addRequestHeader("User-Agent", userAgent);
                request.setDescription("Downloading file...");
                request.setTitle(URLUtil.guessFileName(url, contentDisposition,
                        mimetype));
                request.allowScanningByMediaScanner();
                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                request.setDestinationInExternalFilesDir(MainActivity.this, Environment.DIRECTORY_DOWNLOADS,"csv");//.csv

                DownloadManager dm = (DownloadManager) getSystemService(DOWNLOAD_SERVICE);
                dm.enqueue(request);
                Toast.makeText(getApplicationContext(), "Baixando Arquivo",
                        Toast.LENGTH_LONG).show();
                // downloadFile("Arquivo", url ,userAgent );
            } });

    }
    public void DowloadDialog(final String url, final String UserAgent, String contentdisposition, String mimetype)
    {
        final String filename = URLUtil.guessFileName(url,contentdisposition,mimetype);
        final AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Downloading...")
                .setMessage("Do you want to Download "+ ' '+" "+filename+" "+' ')
                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
                        String cookie = CookieManager.getInstance().getCookie(url);
                        request.addRequestHeader("Cookie",cookie);
                        request.addRequestHeader("User-Agent",UserAgent);
                        request.allowScanningByMediaScanner();
                        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                        DownloadManager manager = (DownloadManager)getSystemService(DOWNLOAD_SERVICE);
                        request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS,filename);
                        manager.enqueue(request);
                    }
                })
                .setNegativeButton("No", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.cancel();
                    }
                })
                .show();
    }
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN)
    private void downloadFile(final String filename, final String url, final String userAgent) {
        final String cookie = CookieManager.getInstance().getCookie(url);
        final DownloadManager downloadManager = (DownloadManager)getSystemService(DOWNLOAD_SERVICE);
        final DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));

        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("[⇬ Fazer download do arquivo]")
                .setMessage("Deseja baixar agora?")
                .setPositiveButton("Sim", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {


                        try {

                            request.setTitle(filename)
                                    .setDescription("Baixando...")
                                    .addRequestHeader("cookie",cookie)
                                    .addRequestHeader("User-Agent",userAgent)
                                    .setMimeType(getFileType(url))
                                    .setAllowedOverMetered(true)
                                    .setAllowedOverRoaming(true)
                                    .setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS,filename)
                                    .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE|
                                            DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                            downloadManager.enqueue(request);

                            Toast.makeText(MainActivity.this, "Download iniciado", Toast.LENGTH_SHORT).show();
                            sUrl = "";
                            sFileName = "";
                            sUserAgent = "";
                        }catch (Exception ignored){
                            Toast.makeText(MainActivity.this, ignored.toString(), Toast.LENGTH_SHORT).show();
                        }



                    }
                })
                .setNegativeButton("Não", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                })
                .show();

    }

    private String getFileType(String url){
        ContentResolver contentResolver = getContentResolver();
        MimeTypeMap mimeTypeMap = MimeTypeMap.getSingleton();
        return mimeTypeMap.getExtensionFromMimeType(contentResolver.getType(Uri.parse(url)));
    }


    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode==1001){
            if (grantResults.length>0&&grantResults[0]==PackageManager.PERMISSION_GRANTED){
                if (!sUrl.equals("")&&!sFileName.equals("")&&!sUserAgent.equals("")){
                    downloadFile(sFileName,sUrl,sUserAgent);
                }
            }
        }
    }
}