/*
 *
 *
脚本功能：有书解锁会员精读
软件版本：6.1.5
下载地址：http://t.cn/A6JZ1ZmD
脚本作者：Hausd0rff
更新时间：2021.11.21
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 有书解锁会员精读&付费精选
^http?:\/\/kongkongfufei.pdf00.com\/api\/client\/info$ url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/yptq.js
[mitm] 
hostname = *.youshu.cc
*
*
*/


var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const info = '/api/client/info';

if (urlq.indexOf(info) != -1) {
    objc.data.vip = {"status":1,"admin_id":0,"plan_id":1362,"viptype":1,"func_quota":-1,"actived_at":"2021-07-22 11:25:35","expired_at":"2099-08-22 11:25:35","forever":0,"latest_ip":"124.160.212.88","isExpired":0,"vipname":"用到你死","now_date":"2021-07-22 11:26:01"}
        }
        body = JSON.stringify(objc);
    }      

}


$done({ body });
