[rewrite_local]
^https:\/\/.+\.bilibili\.com/.+ url request-header (\r\n)Authorization.+(\r\n) request-header $1Authorization:identify_v1 d07aa0b52e59f4629ef73bbcd32d9431$2
[mitm] 
hostname = *.bilibili.com
