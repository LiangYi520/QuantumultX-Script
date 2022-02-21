/*
 *
 *
脚本功能：大神水印vip
软件版本：2.2.7
下载地址：苹果商店
脚本作者：凉意
更新时间：2022.02.21
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 大神水印vip
^https:\/\/dashen-api\.shuiyinyu\.com\/m\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/dssy.js
[mitm] 
hostname = dashen-api.shuiyinyu.com
*
*
*/

var objc = JSON.parse($response.body);
objc.data.vip_expire_time = 1999999999999;
objc.data.auto_subscribe_or_permanent_vip = true;
$done({body: JSON.stringify(objc)});
