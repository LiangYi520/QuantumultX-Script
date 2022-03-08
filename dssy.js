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

var oXd1=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);oXd1['\x64\x61\x74\x61']['\x76\x69\x70\x5f\x65\x78\x70\x69\x72\x65\x5f\x74\x69\x6d\x65']=1999999999999;oXd1['\x64\x61\x74\x61']['\x61\x75\x74\x6f\x5f\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x6f\x72\x5f\x70\x65\x72\x6d\x61\x6e\x65\x6e\x74\x5f\x76\x69\x70']=true;$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](oXd1)});
