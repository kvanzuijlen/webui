/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Torrent 文件||*.torrent||所有文件 (*.*)||*.*||"
	, "确定"
	, "取消"
	, "应用(A)"
	, "是"
	, "否"
	, "关闭(C)"
	, "设置"
	, "语言设置"
	, "选用语言(L)"
	, "隐私信息"
	, "自动检查更新(C)"
	, "更新到 Beta 版本"
	, "在检测更新时发送匿名信息"
	, "下载任务"
	, "未完成文件添加 .!ut 后缀(A)"
	, "预先分配磁盘空间(R)"
	, "任务活动时避免进入待机状态(E)"
	, "显示选项"
	, "删除 Torrent 时要求确认(O)"
	, "删除 Tracker 时要求确认(E)"
	, "退出时显示确认对话框(H)"
	, "交替显示列表背景色(L)"
	, "在标题栏显示当前速度(T)"
	, "在状态栏显示速度限制(O)"
	, "添加任务时"
	, "不要自动开始下载(D)"
	, "激活程序窗口(A)"
	, "显示添加文件窗口(H)"
	, "双击操作"
	, "做种中的 Torrent:"
	, "下载中的 Torrent:"
	, "下载文件的保存位置"
	, "下载时保存目录(P):"
	, "手动添加时总是显示对话框(W)"
	, "下载完成后移至(M):"
	, "添加 Torrent 标签(A)"
	, "只从默认下载目录移动(O)"
	, "Torrent 位置"
	, "保存 Torrent 到:"
	, "任务完成后将 Torrent 文件移动到:"
	, "自动载入 Torrent 于(A):"
	, "删除载入的 Torrent(D)"
	, "监听端口"
	, "传入连接所使用的端口:"
	, "随机端口"
	, "每次启动后使用随机端口(R)"
	, "启用 UPnP 端口映射(U)"
	, "启用 NAT-PMP 端口映射(N)"
	, "代理服务"
	, "类型(Y):"
	, "代理(P):"
	, "端口(O):"
	, "验证"
	, "用户:"
	, "密码:"
	, "通过代理服务器解析主机名"
	, "使用点对点连接代理服务器"
	, "添加系统防火墙例外(F)"
	, "代理隐私"
	, "禁用所有本地 DNS 查询"
	, "禁用会泄露验证信息的功能"
	, "禁用代理不支持的连接"
	, "全局上传比率限制"
	, "最大上传速度(KB/s): [0: 无限制]"
	, "自动"
	, "无下载时切换上传速度为(KB/s):"
	, "全局下载比率限制"
	, "最大下载速度(KB/s): [0: 无限制]"
	, "连接数值"
	, "全局最大连接数量:"
	, "每个 Torrent 的最大连接数:"
	, "每个 Torrent 的上传通道数:"
	, "使用额外的上传通道如果上传速度 < 90%"
	, "整體速度限制選項"
	, "应用比率限制到传输开销"
	, "应用比率限制到 uTP 连接"
	, "基本 BitTorrent 功能"
	, "启用 DHT 网络(E)"
	, "向 Tracker 查询状态信息(A)"
	, "新建 Torrent 时启用 DHT(E)"
	, "启用用户交换(P)"
	, "启用本地用户发现(L)"
	, "限制本地用户带宽(L)"
	, "向 Tracker 提交的 IP 地址/主机名:"
	, "协议加密"
	, "传出连接:"
	, "允许传入旧式连接"
	, "启用带宽管理 [uTP]"
	, "启用 UDP Tracker 支持"
	, "启用传输限定"
	, "限定设置"
	, "限制类型:"
	, "带宽限制:"
	, "时间期间(天):"
	, "选定时段的使用历史"
	, "已经上传:"
	, "已经下载:"
	, "已经上传 + 已经下载"
	, "时段:"
	, "持续 %d 天"
	, "重置历史"
	, "队列设置"
	, "最大的活动任务数(上传或下载):"
	, "最大的活动下载数:"
	, "做种目标 [默认]"
	, "最小比率(%):"
	, "最小做种时间(分):"
	, "做种任务的优先级高于下载任务(S)"
	, "当 µTorrent 达到做种目标时"
	, "限制上传速度为(KB/s): [0: 停止]"
	, "启用计划任务(E)"
	, "计划任务列表"
	, "计划任务设置"
	, "限制上传速度为(KB/s):"
	, "限制下载速度为(KB/s):"
	, "关闭时禁用 DHT 网络"
	, "启用网页界面(W)"
	, "验证"
	, "用户(U):"
	, "密码(P):"
	, "以以下用户名启用来宾账户:"
	, "连接设置"
	, "可选监听端口(L)(默认为连接端口):"
,"仅允许从以下 IP 地址进行访问 (每个地址条目之间用逗号隔开):"
	, "高级选项 [警告: 请勿修改！]"
	, "参数(V):"
	, "True(T)"
	, "False(F)"
	, "设置(S)"
	, "速度弹出列表 [用逗号分隔多重数值]"
	, "覆盖自动速度弹出列表(O)"
	, "上传速度列表:"
	, "下载速度列表:"
	, "永久标签 [请用 \"|\" 字符分隔多重标签]"
	, "搜索引擎 [格式: 名称|链接]"
	, "基本缓存设置"
	, "磁盘缓存的作用是将用户频繁访问的数据保存在内存中，从而减少读写硬盘的次数。µTorrent 通常自动管理缓存，但您可以通过修改以下设置更改其操作模式。"
	, "手动指定缓存大小以覆盖自动设置的缓存大小(MB)(O):"
	, "不需要缓存时减少内存的使用量(R)。"
	, "高级缓存设置"
	, "启用磁盘写入缓存(W)"
	, "每 2 分钟写入未使用的区块(I)"
	, "立即写入已下载完毕的区块(T)"
	, "启用磁盘读取缓存(R)"
	, "如果上传速度较低则关闭读取缓存"
	, "从读取缓存中移除较旧的缓存区块"
	, "缓存超负荷时增加自动缓存的大小"
	, "对磁盘写入禁用系统缓存"
	, "对磁盘读取禁用系统缓存"
	, "运行程序"
	, "当下载完成时运行此程序:"
	, "当状态变更时运行此程序:"
	, "您可以使用以下命令:\r\n%F - 下载文件的名称 (单文件 Torrent 适用)\r\n%D - 文件保存的目录\r\n%N - Torrent 的标题\r\n%S - Torrent 的状态\r\n%L - 标签\r\n%T - Tracker\r\n%M - 消息信息状态(与状态列相同)\r\n%I - 十六进制编码信息\r\n\r\n状态为以下组合:\r\n已启动 =1, 检测中 = 2, 检测后启动 = 4,\r\n已检测 = 8, 错误 = 16, 已暂停 = 32, 自动 = 64, 已载入 = 128"
	, "Torrent 属性"
	, "Tracker (用一个空行来分割)"
	, "带宽设置"
	, "最大上传速度(KB/s): [0: 默认]"
	, "最大下载速度(KB/s): [0: 默认]"
	, "上传通道数: [0: 默认]"
	, "做种时"
	, "替代默认设置(O)"
	, "最小比率 (%s):"
	, "最小做种时间(分):"
	, "其他设置"
	, "初始做种(I)"
	, "启用 DHT(E)"
	, "用户交换(P)"
	, "订阅"
	, "订阅链接:"
	, "自定别名(C):"
	, "订阅"
	, "不自动下载所有项目(N)"
	, "自动下载在订阅中发布的所有项目(A)"
	, "使用智能剧集过滤(S)"
	, "订阅||收藏||历史||"
	, "All Feeds"
	, "过滤设置"
	, "名称:"
	, "过滤:"
	, "排除:"
	, "保存:"
	, "订阅:"
	, "画质:"
	, "季集示例(E): [例如: 1x12-14]"
	, "过滤匹配的原始名称而代替解码名称(F)"
	, "不要自动开始下载"
	, "智能季集过滤"
	, "赋予下载最高优先级(G)"
	, "最小间隔(M):"
	, "新建 Torrent 标签:"
	, "添加 RSS 订阅..."
	, "编辑订阅(E)"
	, "禁用订阅(A)"
	, "启用订阅(A)"
	, "更新订阅(U)"
	, "删除订阅(D)"
	, "下载(D)"
	, "在浏览器中打开链接(B)"
	, "添加到收藏(A)"
	, "添加(A)"
	, "删除(D)"
	, "全部"
	, "(全部)"
	, "(总是匹配)||(此次匹配)||12 小时|| 1 天|| 2 天|| 3 天|| 4 天|| 1 周|| 2 周|| 3 周||每月||"
	, "添加 RSS 订阅"
	, "编辑 RSS 订阅"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "确定删除 RSS 订阅 \"%s\" 吗？"
	, "全称"
	, "名称"
	, "季集"
	, "格式"
	, "编码"
	, "Date"
	, "订阅"
	, "来源链接"
	, "IP 地址"
	, "端口"
	, "客户端"
	, "标识"
	, "完成率(%)"
	, "关联"
	, "下载速度"
	, "上传速度"
	, "请求"
	, "等待中"
	, "已上传"
	, "已下载"
	, "散列错误"
	, "用户下载速度"
	, "最大上传"
	, "最大下载"
	, "排队中"
	, "停止"
	, "完成"
	, "首个区块"
	, "名称"
	, "区块数"
	, "完成率"
	, "优先级"
	, "大小"
	, "跳过"
	, "较低"
	, "正常"
	, "较高"
	, "已经下载:"
	, "已经上传:"
	, "种子数量:"
	, "剩余时间:"
	, "下载速度:"
	, "上传速度:"
	, "用户数量:"
	, "分享比率:"
	, "文件位置:"
	, "散列数值:"
	, "常规"
	, "传输"
	, "%d/%d 已连接 (缓存: %d)"
	, "下载:%s 上传:%s - %s"
	, "复制(C)"
	, "重置(R)"
	, "无限制"
	, "解析 IP 地址(R)"
	, "Get File(s)"
	, "取消下载(D)"
	, "较高优先级(H)"
	, "较低优先级(L)"
	, "正常优先级(N)"
	, "复制 Magnet 链接(M)"
	, "删除数据(L)"
	, "删除 Torrent(D)"
	, "删除 Torrent 和数据(E)"
	, "强制校验(H)"
	, "强制开始(F)"
	, "标签(L)"
	, "暂停(P)"
	, "属性(E)"
	, "下移(D)"
	, "上移(U)"
	, "移除(R)"
	, "移除并(N)"
	, "开始(S)"
	, "停止(S)"
	, "活动"
	, "全部"
	, "完成"
	, "下载"
	, "停止"
	, "其他"
	, "||健康度||健康度"
	, "添加时间"
	, "完成时间"
	, "完成率"
	, "已下载"
	, "下载速度"
	, "剩余时间"
	, "标签"
	, "名称"
	, "序号"
	, "用户"
	, "剩余"
	, "种子"
	, "种子/用户"
	, "分享率"
	, "大小"
	, "来源链接"
	, "状态"
	, "已上传"
	, "上传速度"
	, "您确定要移除选定的 %d 个 Torrent 以及所有相关的数据吗？"
	, "您确定要移除选定的 Torrent 以及所有相关的数据吗？"
	, "您确定要移除选定的 %d 个 Torrent 吗？"
	, "您确定要移除选定的 Torrent 吗？"
	, "确定删除 RSS 过滤 \"%s\" 吗？"
	, "已检查 %:.1d%%"
	, "下载中"
	, "错误: %s"
	, "已完成"
	, "已暂停"
	, "排队中"
	, "排队做种"
	, "做种中"
	, "已停止"
	, "输入标签"
	, "为选定的 Torrent 输入新的标签:"
	, "新建标签..."
	, "移除标签"
	, "常规||伺服||用户||区块||文件||速度||日志||"
	, "添加 Torrent"
	, "从链接添加 Torrent"
	, "暂停"
	, "设置"
	, "下移"
	, "上移"
	, "移除"
	, "RSS 下载器"
	, "开始"
	, "停止"
	, "文件(F)"
	, "添加 Torrent(A)..."
	, "从链接添加 Torrent(U)..."
	, "选项(O)"
	, "设置(P)"
	, "显示类别列表(C)"
	, "显示详细信息(D)"
	, "显示状态栏(S)"
	, "显示工具栏(T)"
	, "显示页签图标(I)"
	, "帮助(H)"
	, "µTorrent 主页(W)"
	, "µTorrent 论坛(F)"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "任务"
	, "暂停所有的 Torrent(P)"
	, "续传所有的 Torrent(R)"
	, "下载: %s%z/s"
	, " 本地: %z/s"
	, " 开销: %z/s"
	, " 传输: %Z"
	, "上传: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "KB"
	, "MB"
	, "PB"
	, "TB"
	, "高级"
	, "带宽"
	, "连接"
	, "缓存"
	, "目录"
	, "常规"
	, "计划"
	, "队列"
	, "界面"
	, "界面"
	, "任务"
	, "远程"
	, "传输上限"
	, "运行程序"
	, "显示属性||开始/停止||打开目录||显示下载栏||"
	, "禁用||启用||强制||"
	, "(无)||Socks4||Socks5||HTTPS||HTTP||"
	, "上传||下载||上传 + 下载||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "名称"
	, "数值"
	, "周一||周二||周三||周四||周五||周六||周日||"
	, "星期一||星期二||星期三||星期四||星期五||星期六||星期日||"
	, "全速"
	, "全速 - 使用常规全局的带宽设置"
	, "限速"
	, "限速 - 使用计划制定的带宽设置"
	, "做种"
	, "做种 - 仅上传数据(包括未完成任务)"
	, "关闭"
	, "关闭 - 停止所有非强制Torrent"
	, "<= %d 小时"
	, "(忽略)"
	, "<= %d 分钟"
	, "%d 天 %d 小时"
	, "%d 小时 %d 分钟"
	, "%d 分钟 %d 秒"
	, "%d 秒"
	, "%d 周 %d 天"
	, "%d 年 %d 周",
"Torrent",
		"订阅",
		"程序",
		"国家/地区",
		'剩余时间', // i.e. how much time remaining
		"/", // i.e. 3 of 4 peers
		"/s", // "per second""
		"粘贴 Torrent 或订阅 URL",
		"主页",
		"注销",
		"正在做种",
		"所有订阅",
		"比特率",
		"分辨率",
		"长度",
		"可点播",
		"类型", // i.e. file extension
		"远程", // i.e. uTorrent remote
		"关于",
		"会话",
		"共享",
		"共享此 Torrent",
		"共享链接",
		"添加",
		"注销",
		"登录",
		"随处访问",
		"保持登录",
		"下载",
		"您的客户端当前无法使用。请确认其已经连接到互联网。",
		"无法与您的 &micro;Torrent 客户端进行通信。重新建立连接后，此消息会自动消失。",
		"打开文件",
		"下载到您的计算机",
		"使用 VLC 媒体播放器打开",
		"操作",
		"集" // i.e. of a TV show
];
