/*
 *
 *
脚本功能：视图播放器免广告特权
软件版本：1.6
下载地址：http://m.jmtvtm.com/static/jumengtv/invite.html?ii=10YT2
脚本作者：凉意
更新时间：2022.02.17
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^*m.jmtiv.com.+ url request-header (\r\n)token:.+(\r\n) request-header $1token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiAiYm9vayIsICJzdWIiOiAidG9rZW4iLCAiaWF0IjogMTY0NDQxMDkxNywgImV4cCI6IDE2NDQ0MjI0MDAsICJsb2dpbl90eXBlIjogMiwgImFjY291bnQiOiAiMTU3Njc5NjMwMjAiLCAiZGV2aWNlX2lkIjogIjFFNkU0NTgxQkQ5QzQ3NjNBOTgxOEM4NjVENDYyNDg5IiwgInVzZXJfaWQiOiA0MDcxOCwgImNyZWF0ZV90aW1lIjogMTY0NDAzNTk2MX0._X2fdvttKE1GRLqt8SvWo0pL9lp9tyKsvSpXRtWpWos$2
[mitm] 

hostname = m.jmtiv.com
