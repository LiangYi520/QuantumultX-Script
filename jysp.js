/*
 *
 *
脚本功能：鲸鱼视频无限观看
软件版本：轻量版
下载地址：https://6478726.com/q4r3p.html?code=9ddU2bd3fe
脚本作者：凉意
更新时间：2022.02.18
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local] 
^http:\/\/api\.\d+\.com\/(long_video/user/daily/short_video_watch|long_video/user/info) url script-response-body xiaozhushipin.js
[mitm] hostname = api.*.com
var body = $response.body;
 var urlq = $request.url;
 var obj = JSON.parse(body);
 const 1 = 'long_video/user/daily/short_video_watch';
 const 2 = 'long_video/user/info';
 if (urlq.indexOf(1) != -1) {
  obj.data. freeWatchCount = 99999;
  body = JSON.stringify(obj);
}
 if (urlq.indexOf(2) != -1) {
  obj.data.vipEndTime = 2099-01-01;
  body = JSON.stringify(obj);
}
 $done({
 body: JSON.stringify(obj)
}
);
