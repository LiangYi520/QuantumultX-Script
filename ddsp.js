/*
 *
 *
脚本功能：多多视频vip会员
软件版本：1.6
下载地址：https://mobile.rr.tv/h5/share/goapp
脚本作者：凉意
更新时间：2022.02.16
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]
^https:\/\/api.rr.tv\/v3plus\/index\/channel url response-body bannerTop response-body bannersTop
^https:\/\/api.rr.tv\/user\/profile url response-body "data":\{"commentUser.+\}\} response-body "data":{"commentUser":true,"user":{"id":17857380199,"headImgUrl":"http://img.rr.tv/img/head/20220213/o_6af3766eaa494f26b8780b318a85d7d8.jpg","isConfirmed":false,"roleInfo":"normal","level":3,"levelStr":"邂逅美剧","sex":0,"confirmInfo":"","replyCount":0,"articleCount":0,"favoriteCount":0,"silverCount":10,"achievementCount":0,"hasSignIn":false,"sign":"","birthday":"2000-01-01","city":"","loginFrom":null,"token":null,"mobile":"13136211953","nickName":"凉意","isSilence":false,"silenceMsg":"","isBlack":false,"score":519,"continuousDay":0,"fansCount":0,"focusUserCount":0,"seriesCount":0,"actorCount":0,"focus":false,"wmSign":null,"medalList":[{"name":"大魔王","endTime":"2099-02-22 02:44:53","imgUrl":"http://img.rr.tv/cover/20200424/o_1587720799676.png","id":2}],"createTime":1617281893000,"newUser":false,"certLabel":null,"certNote":null,"vipMedal":{"name":"大魔王","endTime":"2099-02-22 02:44:53","imgUrl":"http://img.rr.tv/cover/20200424/o_1587720799676.png","id":2,"isExpired":false},"vipLevel":null,"changedValue":1,"isClock":false}}}
^https:\/\/api.rr.tv\/user\/privilege\/list url response-body "data":\[\]\} response-body "data":[{"id":1,"effectObject":"video","action":"play","function":"originalPainting","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":9999940148000},{"id":4,"effectObject":"video","action":"play","function":"noLimit","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":9999940148000},{"id":23,"effectObject":"video","action":"play","function":"noAd","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":9999940148000},{"id":43,"effectObject":"danmu","action":"send","function":"superBarrageBlue","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":9999940148000},{"id":46,"effectObject":"video","action":"play","function":"vipVideo","func":"vipVideo","description":"勋章专享剧集","icon":"zhuanxiangjuji","endTime":9999940148000},{"id":45,"effectObject":"mall","action":"sale","function":"mallDiscount","func":"mallDiscount","description":"龙醇商城九折","icon":"longchunshangcheng","endTime":9999940148000},{"id":37,"effectObject":"growth","action":"play","function":"0.4","func":"0.4","description":"看剧经验+40%","icon":"jingyanzhijiacheng","endTime":9999940148000},{"id":25,"effectObject":"nickName","action":"show","function":"nameHighLight","func":"nameHighLight","description":"高亮昵称","icon":"gaoliangnicheng","endTime":9999940148000},{"id":24,"effectObject":"comment","action":"write","function":"highLight","func":"highLight","description":"高亮评论回复","icon":"https://img.rr.tv/static/images/20170926/HighLigthComment@2x.png","endTime":9999940148000},{"id":20,"effectObject":"article","action":"write","function":"highLight","func":"highLight","description":"高亮发帖","icon":"gaoliangfatie","endTime":9999940148000}]}
^*bayescom.* url reject
^*snssdk.com url reject
^*toutiao.com url reject
