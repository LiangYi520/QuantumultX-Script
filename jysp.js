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
^https:\/\/api\.8897815\.com\/long_video\/advertising url response-body LOGIN_BEFOR response-body 1
[rewrite_local] 
^https:\/\/api\.8897815\.com\/long_video\/user\/info url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/jysp.js
[mitm]
hostname = api.8897815.com
*
*
*/
var objc = JSON.parse($response.body);

objc.data["nickName"] = "凉意";
objc.data["vipEndTime"] = "2099-09-28";
objc.data["userType"] = 1;

$done({body : JSON.stringify(objc)});
