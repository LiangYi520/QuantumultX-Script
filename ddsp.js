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
^http:\/\/^https:\/\/api.rr.tv\/(ad/getAll|user/profile|user/privilege/list) url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/ddsp.js
[mitm] 
hostname = api.rr.tv
*
*
*/

const scriptName = "RRTV";
const magicJS = new MagicJS(scriptName, "INFO");

const rrtv_tab_home = /.*\/v3plus\/index\/channel\?pageNum=1&position=CHANNEL_INDEX/;
const rrtv_tab_cfg= /.*\/app\/config\/h5NativeBar/;
const rrtv_tab_my = /.*\/v3plus\/index\/channel\?pageNum=1&position=CHANNEL_MY/;
const rrtv_privilege = /.*\/user\/privilege\/list/;
const rrtv_ad_getall = /.*\/ad\/getAll/;
const rrtv_drama_detail = /.*\/drama\/app\/get_combined_drama_detail/;
const rrtv_watch_v4 = /.*\/watch\/v4/;
const rrtv_tv = /.*\/user\/prof/;



(() => {
  let body = null;
  if (magicJS.isResponse) {
    switch (true) {
      //首页去广告
      case rrtv_tab_home.test(magicJS.request.url):
        try {
          let obj = JSON.parse(magicJS.response.body);
          delete obj.data.bannerTop;
          for(i = 0;i<obj.data.sections.length;i++){
              if(obj.data.sections[i].id==2717){
                  delete obj.data.sections[i];
              }
          }
          body = JSON.stringify(obj);
        } catch (err) {
          magicJS.logError(`首页去广告出现异常：${err}`);
        }
        break;
      //去除广场
      case rrtv_tab_cfg.test(magicJS.request.url):
        try {
          let obj = JSON.parse(magicJS.response.body);
          obj['data']['homeBarPage'] = [{"darkSelPag":"http://img.rr.tv/barSelpag/20210310/o_1615343956536.pag","selPag":"http://img.rr.tv/barSelpag/20210310/o_1615343961034.pag","pageType":0,"darkUnselImg":"http://img.rr.tv/cover/20210310/o_1615343982560.png","webUrl":"","selImg":"http://img.rr.tv/cover/20210310/o_1615343977931.png","unselImg":"http://img.rr.tv/cover/20210310/o_1615343979417.png","name":"首页","index":1,"nativeAlias":"home","darkSelImg":"http://img.rr.tv/cover/20210310/o_1615343985261.png"},{"darkSelPag":"http://img.rr.tv/barSelpag/20210310/o_1615344101664.pag","selPag":"http://img.rr.tv/barSelpag/20210310/o_1615344101761.pag","pageType":0,"darkUnselImg":"http://img.rr.tv/cover/20210310/o_1615344088886.png","webUrl":"","selImg":"http://img.rr.tv/cover/20210310/o_1615344085709.png","unselImg":"http://img.rr.tv/cover/20210310/o_1615344087390.png","name":"墨魚","index":2,"nativeAlias":"amwayVideo","darkSelImg":"http://img.rr.tv/cover/20210310/o_1615344091229.png"},{"darkSelPag":"http://img.rr.tv/barSelpag/20210310/o_1615344145409.pag","selPag":"http://img.rr.tv/barSelpag/20210310/o_1615344143099.pag","pageType":0,"darkUnselImg":"http://img.rr.tv/img/img/20211013/o_ca5e3b6ce6b747e992789e55222445f2.png","webUrl":"","selImg":"http://img.rr.tv/img/img/20211013/o_14667f24618841a1906fbb2233b8869a.png","unselImg":"http://img.rr.tv/img/img/20211013/o_963933dfc49b4c8bab6e3b36a8a2b42b.png","name":"VIP","index":3,"nativeAlias":"vip","darkSelImg":"http://img.rr.tv/img/img/20211013/o_ad54fb0336764d38910304488804f2a1.png"},{"darkSelPag":"http://img.rr.tv/barSelpag/20210310/o_1615344154522.pag","selPag":"http://img.rr.tv/barSelpag/20210310/o_1615344153652.pag","pageType":0,"darkUnselImg":"http://img.rr.tv/img/img/20211013/o_e35b6941e4a0429486cd5b535337544f.png","webUrl":"","selImg":"http://img.rr.tv/img/img/20211013/o_2e5efef7fd654e3ea8a60e3e719e6e8c.png","unselImg":"http://img.rr.tv/img/img/20211013/o_7492019b1603486383733b7154e967b3.png","name":"我的","index":4,"nativeAlias":"my","darkSelImg":"http://img.rr.tv/img/img/20211013/o_f98a74489e3d4dc9bf8651eea65b949e.png"}];
          body = JSON.stringify(obj);
        } catch (err) {
          magicJS.logError(`广场去广告出现异常：${err}`);
        }
        break;
        //去除商城广告
      case rrtv_tab_my.test(magicJS.request.url):
        try {
          let obj = JSON.parse(magicJS.response.body);
          obj['data']['sections'] = [{"id":2541,"sectionType":"MAGIC_CUBE","displayTitle":"1","startTime":null,"position":23,"display":"SCROLL","moreText":"","sectionContents":[{"feeMode":null,"pictureHeight":null,"targetId":"rrspjump://webview?url=http%3A%2F%2Fmobile.rr.tv%2FappWeb%2F%23%2FbugList","id":34,"pictureWidth":null,"title":"公眾號","targetType":"H5","sectionId":2541,"orderNum":1,"subTitle":null,"icon":"http://img.rr.tv/cover/20210201/o_1612169512400.png"},{"feeMode":null,"pictureHeight":null,"targetId":"rrspjump://webview?url=http%3A%2F%2Fmobile.rr.tv%2Fmission%2F%23%2Fachievement%2Fcenter","id":35,"pictureWidth":null,"title":"墨魚手記","targetType":"H5","sectionId":2541,"orderNum":2,"subTitle":null,"icon":"http://img.rr.tv/cover/20210201/o_1612169790308.png"},],"endTime":null,"targetType":null,"sequence":3,"name":"其他","targetId":"rrspjump://empty"}];
          body = JSON.stringify(obj);
        } catch (err) {
          magicJS.logError(`商城去广告出现异常：${err}`);
        }
        break;
      //rrtv_privilege
      case rrtv_privilege.test(magicJS.request.url):
        try {
          let obj = JSON.parse(magicJS.response.body);
          obj.data = [{"id":1,"effectObject":"video","action":"play","function":"originalPainting","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":9999940148000},{"id":4,"effectObject":"video","action":"play","function":"noLimit","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":9999940148000},{"id":23,"effectObject":"video","action":"play","function":"noAd","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":9999940148000},{"id":43,"effectObject":"danmu","action":"send","function":"superBarrageBlue","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":9999940148000},{"id":46,"effectObject":"video","action":"play","function":"vipVideo","func":"vipVideo","description":"勋章专享剧集","icon":"zhuanxiangjuji","endTime":9999940148000},{"id":45,"effectObject":"mall","action":"sale","function":"mallDiscount","func":"mallDiscount","description":"龙醇商城九折","icon":"longchunshangcheng","endTime":9999940148000},{"id":37,"effectObject":"growth","action":"play","function":"0.4","func":"0.4","description":"看剧经验+40%","icon":"jingyanzhijiacheng","endTime":9999940148000},{"id":25,"effectObject":"nickName","action":"show","function":"nameHighLight","func":"nameHighLight","description":"高亮昵称","icon":"gaoliangnicheng","endTime":9999940148000},{"id":24,"effectObject":"comment","action":"write","function":"highLight","func":"highLight","description":"高亮评论回复","icon":"https://img.rr.tv/static/images/20170926/HighLigthComment@2x.png","endTime":9999940148000},{"id":20,"effectObject":"article","action":"write","function":"highLight","func":"highLight","description":"高亮发帖","icon":"gaoliangfatie","endTime":9999940148000}];
          body = JSON.stringify(obj);
        } catch (err) {
          magicJS.logError(`privilege去广告出现异常：${err}`);
        }
        break;
        //rrtv_ad_getall
      case rrtv_ad_getall.test(magicJS.request.url):
        try {
          let obj = JSON.parse(magicJS.response.body);
          obj.data.adList = [];
          body = JSON.stringify(obj);
        } catch (err) {
          magicJS.logError(`ad_getall去广告出现异常：${err}`);
        }
        break;
         //rrtv_drama
      case rrtv_drama_detail.test(magicJS.request.url):
        try {
          body = magicJS.response.body.replace(/currentQuality":"\w+/g, 'currentQuality":"AI_OD').replace(/canPlay":false/g, 'canPlay":true').replace(/canShowVip":true/g, 'canShowVip":false');         
        } catch (err) {
          magicJS.logError(`drama去广告出现异常：${err}`);
        }
        break;
        //rrtv_watch_4
      case rrtv_watch_v4.test(magicJS.request.url):
        try {
          body = magicJS.response.body.replace(/currentQuality":"\w+/g, 'currentQuality":"AI_OD').replace(/canPlay":false/g, 'canPlay":true').replace(/canShowVip":true/g, 'canShowVip":false');          
        } catch (err) {
          magicJS.logError(`watch_4去广告出现异常：${err}`);
        }
        break;
        //rrtv_pro
      case rrtv_tv.test(magicJS.request.url):
        try {
          let obj = JSON.parse(magicJS.response.body);
          obj.data.user.medalList=[{"name":"大魔王","endTime":"2299-02-22 02:44:53","imgUrl":"http://img.rr.tv/cover/20200424/o_1587720799676.png","id":1}];
          obj.data.user.privilegeList=[{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"originalPainting","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"mall","action":"sale","function":"mallDiscount","func":"mallDiscount","description":"龙醇商城九折","icon":"longchunshangcheng","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"article","action":"write","function":"highLight","func":"highLight","description":"高亮发帖","icon":"gaoliangfatie","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"nickName","action":"show","function":"nameHighLight","func":"nameHighLight","description":"高亮昵称","icon":"gaoliangnicheng","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"comment","action":"write","function":"highLight","func":"highLight","description":"高亮评论回复","icon":"huifu","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"danmu","action":"send","function":"superBarrageBlue","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"vipVideo","func":"vipVideo","description":"勋章专享剧集","icon":"zhuanxiangjuji","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"growth","action":"play","function":"0.4","func":"0.4","description":"看剧经验+40%","icon":"jingyanzhijiacheng","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"noLimit","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":9999987654321},{"id":null,"createTimeStr":"","createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"noAd","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":9999987654321}];
          obj.data.user.vipMedal={"name":"大魔王","endTime":"2299-02-22 02:44:53","imgUrl":"http://img.rr.tv/cover/20200424/o_1587720799676.png","id":1,"isExpired":false};
          body = JSON.stringify(obj);
        } catch (err) {
          magicJS.logError(`pro去广告出现异常：${err}`);
        }
        break;
      default:
        magicJS.logWarning("触发意外的请求处理，请确认脚本或复写配置正常。");
        break;
    }
  } else {
    magicJS.logWarning("触发意外的请求处理，请确认脚本或复写配置正常。");
  }
  if (body) {
    magicJS.done({ body });
  } else {
    magicJS.done();
  }
})()
