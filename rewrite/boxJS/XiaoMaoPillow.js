/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-09-24
 *
 * 


\p\i\l\l\o\w\永\久\年\度\订\阅\


仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · Tg频道频道：https://t.me/xiaomaoJT
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoPillow.js

2、打开软件 > 自动解锁会员 ，若未解锁成功 > 底部「中间按钮」，右上角「设置」「恢复购买」> 或重新重启App或清空缓存或重装。

3、解锁成功理论上有消息弹窗。[🚨🚨🚨无效请关掉软件进程后，先打开脚本，再进软件进行解锁]

4、⚠️⚠️⚠️此脚本需常驻，建议置于较后的优先级，以免影响其他脚本「若置于同类脚本前面将影响其他恢复类解锁脚本」。


[mitm]
hostname = api.revenuecat.com

[rewrite_local]
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body pi.js
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-header pi.js

********************************/