/* Quantumult X 脚本: 音频提取❤凉意 下载链接🔗https://apps.apple.com/us/app/%E9%9F%B3%E9%A2%91%E5%89%AA%E8%BE%91%E6%8F%90%E5%8F%96-%E9%9F%B3%E4%B9%90%E5%89%AA%E8%BE%91%E7%BC%96%E8%BE%91%E8%A7%86%E9%A2%91%E6%8F%90%E5%8F%96%E9%9F%B3%E9%A2%91%E5%B7%A5%E5%85%B7/id1546430222?l=zh
[rewrite_local] 
#音频提取
^http://kongkongfufei.pdf00.com/api/client/info url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/yptq.js
[mitm] hostname = kongkongfufei.pdf00.com,
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
