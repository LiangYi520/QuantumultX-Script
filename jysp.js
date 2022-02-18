/*
 *
 *
脚本功能：鲸鱼视频无限观看
软件版本：极速版
下载地址：https://6478726.com/q4r3p.html?code=9ddU2bd3fe
脚本作者：凉意
更新时间：2022.02.18
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local] 
^https:\/\/api\.8897815\.com\/long_video\/advertising url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/jysp.js
[mitm]
hostname = api.8897815.com
*
*
*/
var body = $response.body;
var urlq = $request.url;
var obj = JSON.parse(body);
const 1 ='/long_video/advertising';
const 2 ='/long_video/user/info';
 if (urlq.indexOf(1) != -1) {
  delete obj["LOGIN_BEFOR"];
  body = JSON.stringify(obj);
}
 if (urlq.indexOf(2) != -1) {
  obj.["vipEndTime"] = "2099-01-01";
  body = JSON.stringify(obj);
}
$done({ body });
