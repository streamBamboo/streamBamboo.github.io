var aData = {

	name: ['保健营养', '美容化妆', '时尚女装', '居家日用', '酒水茗茶', '手机数码', '箱包饰品', '厨房用具', '家用电器', '品牌男装', '家纺家具', '粮油生鲜', '珠宝钟表', '休闲食品', '母婴童装', ]

}

var tData = {
	all: [{
			text: ['维生素/矿物质', '鱼油/磷脂', '蛋白质', '胶原蛋白', '玛咖', '葡萄籽', '左旋肉碱', '钙片', '维骨力', '蜂蜜', '益生菌', '传统滋补', '酵素', '保健器具', '眼鼻喉护理', '按摩器材', '血压血糖', '健身器材']
		},
		{
			text: ['面膜', '防晒', '乳液精华', '洗发护发', '染发造型', '眼部护理', '腮红底妆', '唇膏唇彩', '卸妆洁面', 'BB霜', '香水', '美容工具', '身体护理', '牙刷/牙线', '牙膏/牙粉/漱口水', '洗手液/香皂', '手足颈养护', '精油芳疗', '卫生巾', '男士用品', '其它']
		},
		{
			text: ['内衣袜装', '裙装', 'T恤', '居家服', '上衣/衬衫', '裤装套装', '运动户外', '凉鞋/拖鞋', '休闲鞋/运动鞋', '皮鞋/商务鞋', '针织衫', '户外', '外套棉服', '毛呢大衣', '羽绒服', '其它']
		},
		{
			text: ['收纳箱/盒', '清洁工具', '雨伞雨具', '纸品', '汽车用品', '厨房清洁', '五金工具', '衣物清洁', '灭蚊器', '衣架衣罩', '户外用品', '芳香除味', '淋浴花洒', '压缩袋', '鲨鱼衍生品', '其它']
		},
		{
			text: ['啤酒', '葡萄酒', '白酒', '红酒', '洋酒', '果酒', '米酒', '绿茶', '普洱茶', '红茶', '白茶', '乌龙茶', '黑茶', '塑身茶', '乳品/奶粉', '冲调', '咖啡', '饮料', '饮用水', '其它']
		},
		{
			text: ['手机', '耳机', '充电类', '保护类', '智能周边', '数码配件']
		},
		{
			text: ['女包', '男包', '钱包/卡包', '双肩包', '电脑包', '拉杆箱', '眼镜', '女围巾帽饰', '男围巾帽饰', '其它']
		},
		{
			text: ['精选套锅', '餐具套装', '铁锅', '不粘锅', '中式炒锅', '杯子/壶', '茶/咖啡用具', '碗盘碟盆', '保温盒/便当盒', '儿童餐具', '厨房刀具', '蒸锅', '筷勺/刀叉', '玻璃陶瓷锅', '酒具', '汤锅', '奶锅', '焖烧杯', '闷烧锅', '烘焙工具', '烧烤用具', '压力锅', '砧板', '厨房配件', '收纳保鲜', '其它']
		},
		{
			text: ['破壁料理机', '吸尘器', '电压力锅', '空气净化器', '电视机', '冰箱', '洗衣机', '净水器', '油烟机', '榨汁机', '电饭锅', '电热水瓶/壶', '空调扇', '多功能锅', '热水器', '煮蛋器', '电陶炉', '面包机', '消毒柜', '烤箱', '微波炉', '咖啡机', '搅拌机', '电磁炉', '光波炉', '吹风机', '果蔬净化机', '豆浆机', '电风扇', '坐便器/智能盖板', '取暖器', '挂烫机/熨斗', '蒸汽清洁工具', '加湿器', '其它']
		},
		{
			text: ['T恤', '居家服', '内衣袜装', '运动户外', '衬衫', '凉鞋/拖鞋', '休闲鞋/运动鞋', '皮鞋/商务鞋', '外套棉服', '羽绒服', '其它']
		},
		{
			text: ['夏凉被', '凉席凉枕', '床品套件', '枕头', '被子', '毛巾被/毯', '桌/椅', '沙发', '书架/格柜', '床垫/床褥', '床', '床头柜', '衣柜', '鞋架鞋柜', '卫浴毛巾', '窗帘', '其它']
		},
		{
			text: ['米面杂粮', '海鲜水产', '肉类禽蛋', '有机食品', '食用油', '调味品', '南北干货', '新鲜水果', '方便速食']
		},
		{
			text: ['项链/吊饰', '手链/手镯', '戒指', '耳环', '国产名表', "原装进口表", '座钟', '挂钟', '纪念收藏', '裸钻/宝石', '贵金属', '其它']
		},
		{
			text: ['罐头食品', '坚果炒货', '蜜饯果干', '熟食/肉干', '饼干蛋糕', '海味零食', '果干果泥', '巧克力糖果', '膨化谷物']
		},
		{
			text: ['辅助食品', '奶粉', '母婴用品', '纸尿裤', '婴童服饰', '童车', '玩具']
		},

	]

}

var qData = {
	oPll: [{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399'
		},
		{
			imgSrc: 'img/hediao.jpg',
			name: '谢伟核雕精品《五福临门》',
			money: '&yen;1980'
		},
		{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399'
		},
		{
			imgSrc: 'img/zhaguo.jpg',
			name: 'HYUNDAI现代无油空气炸锅',
			money: '&yen;699'
		},
		{
			imgSrc: 'img/tieguo.jpg',
			name: '鼎匠百年传承古法老铁锅套组',
			money: '&yen;999'
		},
		{
			imgSrc: 'img/liaoshen.jpg',
			name: '棒棰岛即食辽参120头独供组',
			money: '&yen;1999'
		},
		{
			imgSrc: 'img/paopao.jpg',
			name: '艾尚彩果香颗粒泡泡染超值组',
			money: '&yen;299'
		},
		{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399'
		},
		{
			imgSrc: 'img/jinjunmei.jpg',
			name: '君宜特级金骏眉独供组',
			money: '&yen;699'
		},
		{
			imgSrc: 'img/zijinhu.jpg',
			name: '紫玉金砂君子壶套组',
			money: '&yen;1280'
		},
		{
			imgSrc: 'img/yafeishi.jpg',
			name: '雅菲诗防脱育发精华套组',
			money: '&yen;499'
		},
		{
			imgSrc: 'img/zhenniang.jpg',
			name: '法国进口百年老藤珍酿独供组',
			money: '&yen;999'
		},
		{
			imgSrc: 'img/hediao.jpg',
			name: '谢伟核雕精品《五福临门》',
			money: '&yen;1980'
		}
	]
}

var vData = {
	oQll: [{
			imgSrc: 'img/tieguo.jpg',
			name: '鼎匠百年传承古法老铁锅套组',
			money: '&yen;999'
		},
		{
			imgSrc: 'img/pobi.jpg',
			name: 'PALLASKR全智能营养破壁料理机',
			money: '&yen;1380'
		},
		{
			imgSrc: 'img/wuniangye.jpg',
			name: '五粮液百年传奇绵柔酒4坛组',
			money: '&yen;999'
		},
		{
			imgSrc: 'img/xianglian.jpg',
			name: '三井珠宝红珊瑚经典长款项链',
			money: '&yen;4980'
		},
		{
			imgSrc: 'img/zhenniang.jpg',
			name: '法国进口百年老藤珍酿独供组',
			money: '&yen;999'
		},
		{
			imgSrc: 'img/hediao.jpg',
			name: '谢伟核雕精品《五福临门》',
			money: '&yen;1980'
		}
	]
}

var Last = {
	fin: [{
			imgSrc: 'img/yazui.jpg',
			name: '乐美雅鸭嘴壶5件套 (蓝)',
			money: '&yen;59',
			agio: '&yen;71',
			sold: '已售7405',
		},
		{
			imgSrc: 'img/bei.jpg',
			name: '乐美雅干邑杯25CL*6',
			money: '&yen;112',
			agio: '&yen;135',
			sold: '已售4535',
		},
		{
			imgSrc: 'img/jingshuiqi.jpg',
			name: '英国AA姜精油10ml',
			money: '&yen;59',
			agio: '&yen;71',
			sold: '已售8567',
		},
		{
			imgSrc: 'img/mianmo.png',
			name: '英国AA紧致消脂按摩油*3',
			money: '&yen;158',
			agio: '&yen;190',
			sold: '已售2423',
		},
		{
			imgSrc: 'img/fangshai.jpg',
			name: '碧柔水感防晒霜增量版85g',
			money: '&yen;98',
			agio: '&yen;118',
			sold: '已售6575',
		},
	]
}

var Round = {
	world: [{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399',
			agio: '&yen;571',
		},
		{
			imgSrc: 'img/zijinhu.jpg',
			name: '紫玉金砂君子壶套组',
			money: '&yen;1280',
			agio: '&yen;1359',
		},
		{
			imgSrc: 'img/wuniangye.jpg',
			name: '五粮液百年传奇绵柔酒4坛组',
			money: '&yen;999',
			agio: '&yen;1371',
		},
		{
			imgSrc: 'img/zhenniang.jpg',
			name: '法国进口百年老藤珍酿独供组',
			money: '&yen;999',
			agio: '&yen;1371',
		},
		{
			imgSrc: 'img/tieguo.jpg',
			name: '鼎匠百年传承古法老铁锅套组',
			money: '&yen;999',
			agio: '&yen;1180',
		},
		{
			imgSrc: 'img/anmo.jpg',
			name: '英国AA紧致消脂按摩油*3',
			money: '&yen;158',
			agio: '&yen;190',
		},
		{
			imgSrc: 'img/fangshai.jpg',
			name: '碧柔水感防晒霜增量版85g',
			money: '&yen;98',
			agio: '&yen;118',
		},
		{
			imgSrc: 'img/yazui.jpg',
			name: '乐美雅鸭嘴壶5件套 (蓝)',
			money: '&yen;59',
			agio: '&yen;71',
		},
		{
			imgSrc: 'img/bei.jpg',
			name: '乐美雅干邑杯25CL*6',
			money: '&yen;112',
			agio: '&yen;135',
		},
		{
			imgSrc: 'img/you.jpg',
			name: '英国AA姜精油10ml',
			money: '&yen;59',
			agio: '&yen;71',
		},
	]
}

var home = {
	app: [{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399',
			agio: '&yen;571',
		},
		{
			imgSrc: 'img/zijinhu.jpg',
			name: '紫玉金砂君子壶套组',
			money: '&yen;1280',
			agio: '&yen;1359',
		},
		{
			imgSrc: 'img/wuniangye.jpg',
			name: '五粮液百年传奇绵柔酒4坛组',
			money: '&yen;999',
			agio: '&yen;1371',
		},
		{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399',
			agio: '&yen;671',
		},
		{
			imgSrc: 'img/hediao.jpg',
			name: '谢伟核雕精品《五福临门》',
			money: '&yen;1980',
			agio: '&yen;2371',
		},
		{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399',
			agio: '&yen;471',
		},
		{
			imgSrc: 'img/zhaguo.jpg',
			name: 'HYUNDAI现代无油空气炸锅',
			money: '&yen;699',
			agio: '&yen;1071',
		},
		{
			imgSrc: 'img/tieguo.jpg',
			name: '鼎匠百年传承古法老铁锅套组',
			money: '&yen;999',
			agio: '&yen;1371',
		},
		{
			imgSrc: 'img/liaoshen.jpg',
			name: '棒棰岛即食辽参120头独供组',
			money: '&yen;1999',
			agio: '&yen;2371',
		},
		{
			imgSrc: 'img/paopao.jpg',
			name: '艾尚彩果香颗粒泡泡染超值组',
			money: '&yen;299',
			agio: '&yen;371',
		},
		{
			imgSrc: 'img/antang.jpg',
			name: '跨境新西兰goodhealth氨糖',
			money: '&yen;399',
			agio: '&yen;571',
		},
		{
			imgSrc: 'img/jinjunmei.jpg',
			name: '君宜特级金骏眉独供组',
			money: '&yen;699',
			agio: '&yen;1071',
		},
		{
			imgSrc: 'img/zijinhu.jpg',
			name: '紫玉金砂君子壶套组',
			money: '&yen;1280',
			agio: '&yen;1371',
		},
		{
			imgSrc: 'img/yafeishi.jpg',
			name: '雅菲诗防脱育发精华套组',
			money: '&yen;499',
			agio: '&yen;671',
		},
		{
			imgSrc: 'img/zhenniang.jpg',
			name: '法国进口百年老藤珍酿独供组',
			money: '&yen;999',
			agio: '&yen;1371',
		},
	]
}

var foot = {

	h4: ['订购指南', '支付及配送', '售后服务', '合作关系', '媒体资料库', '关于我们'],
	li: [{
			alls: ['注册流程', '订购流程', '发票指南', '会员制度说明', ]
		},
		{
			alls: ['支付方式', '货到付款', '环球卡', '配送时间与区域', ]
		},
		{
			alls: ['如何退换货', '顾客服务', '赔偿先付承诺', ]
		},
		{
			alls: ['成为供应商', '合作伙伴', '阅视无限', '供应商系统', ]
		},
		{
			alls: ['媒体资料', '社交媒体', '最新资讯', '友情链接', ]
		},
		{
			alls: ['公司介绍', '社会责任', '里程碑', '加入我们', ]
		}
	]
}