/*
 *
 *
脚本功能：一甜相机vip会员
软件版本：2.8.2
下载地址：苹果商店下载
脚本作者：凉意
更新时间：2022.02.20
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 一甜相机vip
^https:\/\/m2u-api\.getkwai\.com\/api-server\/api\/v2\/vip\/vipUserInfo url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/ytxj.js
[mitm] 
hostname = m2u-api.getkwai.com
*
*
*/

var objc = JSON.parse($response.body);
objc.data.vipUserProductInfo.expireTime =1999999999999;
objc.data.vipUserProductInfo.vip =true;
$done({body: JSON.stringify(objc)});
