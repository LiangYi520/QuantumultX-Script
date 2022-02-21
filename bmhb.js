[rewrite_local]
# > 斑马海报vip
^https:\/\/zebra\.maka\.im\/api\/user\/info url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/bmhb.js
[mitm] 
hostname = kongkongfufei.pdf00.com
*
*
*/

var objc = JSON.parse($response.body);
objc.data.is_lifelong_vip =true; 
$done({body: JSON.stringify(objc)});
