/*
 *
 *
脚本功能：破解鲸鱼视频，去启动广告
软件版本：
下载地址：https://6478726.com/yn0ma.html?code=9ddU5357c9
脚本作者：凉意
更新时间：2022.03.30
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 鲸鱼视频破解
^https:\/\/res\.czdxgbh2020\.com\/(long_video\/user\/daily\/short_video_watch|long_video\/user\/info|long_video\/user\/video\/buy|long_video\/advertising)$ url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/jysp.js
[mitm] 
hostname = res.czdxgbh2020.com
*
*
*/
let ly = $request.url;
const path1 = "long_video/user/daily/short_video_watch";
const path2 = "long_video/user/info";
const path3 = "long_video/user/video/buy";
const path3 = "long_video/advertising";
let obj = JSON.parse($response.body);

if (ly.indexOf(path4) != -1) {
  delete obj["data"];
  
}
if (ly.indexOf(path2) != -1) {
  obj["data"]["nickName"] = "凉意";
  obj["data"]["vipEndTime"] = "2099-01-01";
  obj["data"]["userType"] = 2;
}
if (ly.indexOf(path3) != -1) {
  obj["data"]["isSuccess"] = true;
}
if (ly.indexOf(path1) != -1) {
  obj["data"]["freeWatchCount"] = 999990;
}

$done({
  body: JSON.stringify(obj)
});
