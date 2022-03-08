[rewrite_local]

# >b
^https:\/\/app\.bilibili\.com\/bilibili\.pgc\.gateway\.player\.v2\.PlayURL\/PlayView url script-request-header https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/b.js

[mitm] 

hostname = app.bilibili.com
*
*
*/
var ly = $request.headers;
ly['Authorization'] = 'identify_v1 4aeaadd37a670f85e503f4752d419c31';
$done({
    headers : ly
});
