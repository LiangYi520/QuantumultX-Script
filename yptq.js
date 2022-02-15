/*
 *
 *
脚本功能：拦截100解锁超级会员
软件版本：3.0.2
下载地址：http://t.cn/A6MLFAJf
脚本作者：Hausd0rff
更新时间：2022-02-15
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local] 
#音频提取
^http?:\/\/kongkongfufei.pdf00.com\/api\/client\/info$ url script-response-body yptq.js
[mitm] hostname = kongkongfufei.pdf00.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const 1 = '/api/client/info';

if (url.indexOf(1) != -1) {
    obj.vip={"status":1,"admin_id":0,"plan_id":1362,"viptype":1,"func_quota":-1,"actived_at":"2021-07-22 11:25:35","expired_at":"2099-08-22 11:25:35","forever":0,"latest_ip":"124.160.212.88","isExpired":0,"vipname":"凉意","now_date":"2021-07-22 11:26:01"}; 
    body = JSON.stringify(obj);
}

$done({body});
