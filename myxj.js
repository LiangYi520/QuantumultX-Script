/*
 *
 *
脚本功能：解锁vip
软件版本：10.4.40
下载地址：https://apps.apple.com/cn/app/id592331499
脚本作者：凉意
更新时间：2022.03.26
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 美颜相机解锁vip
^https:\/\/api\.meiyan\.com\/vip\/user_info\.json url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/myxj.js
[mitm] 
hostname = api.meiyan.com
*
*
*/
var obj = JSON.parse($response.body);
    obj = {
  "meta": {
    "code": 0,
    "msg": "",
    "error": "",
    "request_uri": "/vip/user_info",
    "reqid": "649ef52110347c23ce8ed498c7b85880"
  },
  "response": {
    "status": 1,
    "agreement_status": 2,
    "agreement_platform": 1,
    "expire_date": "2099-01-01",
    "expire_time": "99999999999",
    "period_type": 2,
    "product_type": 3,
    "permission": [],
    "type": 1,
    "ad_vip_type": 1,
    "discount_status": 1
  }
}

$done({body:JSON.stringify(obj)});
