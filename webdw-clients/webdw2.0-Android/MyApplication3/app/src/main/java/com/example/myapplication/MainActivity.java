package com.example.myapplication;

import android.content.Context;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.webdw.andorid.CWebDWUIComponent;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.os.Handler;
import android.os.Message;
import android.view.LayoutInflater;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.AbsoluteLayout;
import android.widget.Button;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONObject;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity {
    private int i = 0;
    private String uiString="";
    //将i的值传给Handler，通知Handler刷新UI
    public void refreshMSG() {
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        i++;
        //消息要先传进Message中，再由Message传递给Handler处理
        Message msg = Message.obtain();
        msg.arg1 = i;//Message类有属性字段arg1、arg2、what...
        if(this.uiString.length()>0) {
            msg.obj = this.uiString; //将UI表示的字符串传递过去
            mHandler.sendMessage(msg);//sendMessage()用来传送Message类的值到mHandler
            this.uiString =""; //清空UI字符串字段
        }
    }

    //新建Handler对象。
    Handler mHandler = new Handler(){
        //handleMessage为处理消息的方法
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            if(true) {
                Context mContext = MainActivity.this;
                String uistring = msg.obj.toString();
                try {
                    drawPictByString(mContext, uistring);
                }catch (Exception e){
                    e.printStackTrace();
                }
                //tv.setText(msg.arg1 + "");
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final LayoutInflater layoutInflater = LayoutInflater.from(this);
        final Context mContext = MainActivity.this;
        final AbsoluteLayout r2 = (AbsoluteLayout)findViewById(R.id.mainUI);

        //创建子线程
        new Thread() {
            public void run() {
                super.run();
                while(true) {
                    refreshMSG();//刷新UI
                }
            }
        }.start();

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        Button myButton1= (Button)findViewById(R.id.button1);
        Button myButton2= (Button)findViewById(R.id.button2);

        final TextView textview = (TextView)findViewById(R.id.editText) ;

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        myButton1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                textview.setText("hello world");
            }
        });
        //点击mybutton2时，和后台服务器通讯，获取后台数据
        myButton2.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                textview.setText("点击这个按钮将和后台服务器通讯。");
                final String address  = "http://webdw.vicp.net/webdw/retrieve?token=&dwname=d_products&args=name=&rand=34.40064336930819";
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            OkHttpClient client = new OkHttpClient();
                            Request request = new Request.Builder()
                                    .url(address)
                                    .build();
                            Response response = client.newCall(request).execute();
                            String responseData = response.body().string();
                            uiString = responseData;
                            textview.setText(responseData);

                            //String sret = drawPictByString(mContext,responseData);
                            //textview.setText(sret);
                        } catch (Exception e) {
                            e.printStackTrace();
                            textview.setText(e.toString());
                        }
                    }
                }).start();

            }

        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    /**
     * 根据给定的字符串来绘制图形界面
    * @param retStr 后台调用返回的json字符串，代表界面对象
     */
    public String drawPictByString( Context context, String retStr) throws Exception {
        JSONObject retjson = new JSONObject(retStr);
        if(! retjson.get("status").toString().equals("200")) {
            return ("webdw:后台返回数据错误.");
        }
        String dwuuid = retjson.get("uuid").toString();
        //获取返回的ui对象列表，存储在uiobjList里面
        JSONArray json = retjson.getJSONArray("uiobjList");
        final AbsoluteLayout mainui = (AbsoluteLayout)findViewById(R.id.mainUI);

        for (int i = 0; i < json.length(); i++) {
            JSONObject json1 = (JSONObject) json.get(i);
            CWebDWUIComponent ui = new CWebDWUIComponent();
            //从json数据里面读取到元素定义属性
            ui.fromJson(json1);
            //利用元素定义属性来定义动态UI对象进行渲染
            ui.CreateUINode(mainui,context);
        }
        return "webdw:OK";
    }

}
