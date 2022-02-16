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

var objc = JSON.parse($response.body);
objc.medalList = [{"name":"大魔王","endTime":"2099-02-22 02:44:53","imgUrl":"http://img.rr.tv/cover/20200424/o_1587720799676.png","id":2}]
objc.privilegeList = [{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"originalPainting","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"mall","action":"sale","function":"mallDiscount","func":"mallDiscount","description":"龙醇商城九折","icon":"longchunshangcheng","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"article","action":"write","function":"highLight","func":"highLight","description":"高亮发帖","icon":"gaoliangfatie","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"nickName","action":"show","function":"nameHighLight","func":"nameHighLight","description":"高亮昵称","icon":"gaoliangnicheng","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"comment","action":"write","function":"highLight","func":"highLight","description":"高亮评论回复","icon":"huifu","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"danmu","action":"send","function":"superBarrageBlue","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"vipVideo","func":"vipVideo","description":"勋章专享剧集","icon":"zhuanxiangjuji","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"growth","action":"play","function":"0.4","func":"0.4","description":"看剧经验+40%","icon":"jingyanzhijiacheng","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"noLimit","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"noAd","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":9699987654321}
          obj.data.user.privilegeList=[{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"originalPainting","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"mall","action":"sale","function":"mallDiscount","func":"mallDiscount","description":"龙醇商城九折","icon":"longchunshangcheng","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"article","action":"write","function":"highLight","func":"highLight","description":"高亮发帖","icon":"gaoliangfatie","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"nickName","action":"show","function":"nameHighLight","func":"nameHighLight","description":"高亮昵称","icon":"gaoliangnicheng","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"comment","action":"write","function":"highLight","func":"highLight","description":"高亮评论回复","icon":"huifu","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"danmu","action":"send","function":"superBarrageBlue","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"vipVideo","func":"vipVideo","description":"勋章专享剧集","icon":"zhuanxiangjuji","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"growth","action":"play","function":"0.4","func":"0.4","description":"看剧经验+40%","icon":"jingyanzhijiacheng","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"noLimit","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":9699987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"noAd","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":9699987654321}]
objc.vipMedal = {"name":"大魔王","endTime":"2099-02-22 02:44:53","imgUrl":"http://img.rr.tv/cover/20200424/o_1587720799676.png","id":2,"isExpired":false}
$done({body: JSON.stringify(objc)});
