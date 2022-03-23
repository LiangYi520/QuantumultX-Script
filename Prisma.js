/*
 *
 *
脚本功能：解锁订阅
软件版本：4.6.6
下载地址：https://apps.apple.com/cn/app/prisma-%E7%85%A7%E7%89%87%E7%BC%96%E8%BE%91%E5%99%A8/id1122649984
脚本作者：凉意
更新时间：2022.03.23
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > Prisma解锁订阅
^https:\/\/api\.neuralprisma\.com\/receipt\/ios\/status\/prisma\/.+ url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/Prisma.js
[mitm] 
hostname = api.neuralprisma.com
*
*
*/
var obj = JSON.parse($response.body);
    obj = {
  "status": "ok",
  "is_valid": true,
  "expiration_date": "2066-03-25T23:38:12Z",
  "expiration_date_unix": 9648251492,
  "is_trial": false,
  "processing_count": 0,
  "is_introductory_used": true,
  "product_id": "",
  "promotional_offer_id": "",
  "is_grace_period": false,
  "auto_renew_enabled": true,
  "is_in_billing_retry_period": false,
  "subscription_type": "annual",
  "platform": "ios",
  "is_bonus": false,
  "bonus_days_added": 0,
  "device_user_info": {
    "auth_type": "",
    "subscription_valid": true
  }
}
$done({body:JSON.stringify(obj)});
