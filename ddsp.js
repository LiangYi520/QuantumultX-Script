/*
 *
 *
脚本功能：多多视频vip会员
软件版本：1.6
下载地址：https://mobile.rr.tv/h5/share/goapp
脚本作者：凉意
更新时间：2021.11.21
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 多多视频vip
^http:\/\/^https:\/\/api.rr.tv.+ url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/ddsp.js
[mitm] 
hostname = api.rr.tv
*
*
*/

var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
    var obj = JSON.parse(body);
    obj.data.adList = [];
    body = JSON.stringify(obj);
} else if (url.indexOf('/user/privilege/list') != -1) {
    var obj = JSON.parse(body);
    obj.data = [{"action":"play","effectObject":"video","id":1,"function":"originalPainting","func":"originalPainting","endTime":1667341767582,"description":"解锁原画","icon":"jiesuoyuanhua"},{"action":"play","effectObject":"video","id":4,"function":"noLimit","func":"noLimit","endTime":1567341767582,"description":"看剧无限制","icon":"kanjuwuxianzhi"},{"action":"play","effectObject":"growth","id":37,"function":"0.4","func":"0.4","endTime":1667341767582,"description":"看剧经验+40%","icon":"jingyanzhijiacheng"},{"action":"send","effectObject":"danmu","id":43,"function":"superBarrageBlue","func":"superBarrageBlue","endTime":1667341767582,"description":"超级弹幕","icon":"chaojidanmu"},{"action":"play","effectObject":"video","id":23,"function":"noAd","func":"noAd","endTime":1667341767582,"description":"看剧无广告","icon":"kanjuwuguanggao"}];
    
}
body = JSON.stringify(obj);
$done({body});
