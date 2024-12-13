/******************************

脚本功能：喜马拉雅 去除专辑会员状态+去广告+会员
更新时间：2024-05-16
脚本描述：限时破解会员
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https?:\/\/xdcs-collector(hera)?\.ximalaya\.com\/(api|nyx)\/v1 url reject
https?:\/\/.*\.ximalaya\.com\/mobile-playpage\/view\/ url reject
https?:\/\/.*\.ximalaya\.com\/chaos-notice-web\/v1\/message\/preview\/list url reject
https?:\/\/.*\.ximalaya\.com\/social-web\/bottomtabs\/dynamicentrance\/status url reject
https?:\/\/.*\.xmcdn\.com\/\w{8}\/\w{4}-\w{16}\/.+gif$ url reject
https?:\/\/.*\.ximalaya\.com\/(dog-portal\/checkold|(child-mobile\/child|aged-mobile\/aged)\/mode\/query) url reject
https?:\/\/.*\.ximalaya\.com\/discovery-feed\/isshowusergiftpendant url reject
https?:\/\/.*\.ximalaya\.com\/mobile-user\/unread url reject
https?:\/\/.*\.ximalaya\.com\/mobile-user\/minorprotection\/pop url reject
https?:\/\/.*\.ximalaya\.com\/collector\/xl\/v\d url reject
https?:\/\/.*\.ximalaya\.com\/butler-portal\/versioncheck url reject
https?:\/\/(adse\.wsa|adse|adbehavior)\.ximalaya\.com\/.* url reject
https?:\/\/.*\.ximalaya\.com\/mobile\/discovery\/v\d\/location url reject
https?:\/\/.*\.ximalaya\.com\/api\/v\d\/adrealtime url reject
https?:\/\/.*\.ximalaya\.com\/ting\/(loading|feed|home)? url reject
https?:\/\/.*\.ximalaya\.com\/discovery-feed\/focus\/queryf url reject
https?:\/\.*linkeye-cloud\/checkip url reject
https?:\/\/www\.taobao\.com\/help\/getip\.php url reject
https?:\/\.*audid-api\.taobao\.com url reject
https?:\/\/passport(ws)?\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject
https?:\/\/(mobile(hera)?|m(ob)?wsa|m)\.ximalaya\.com\/mobile(-user\/v\d\/homePage|-playpage\/(track\/v\d\/baseInfo|playpage\/(tabs\/v\d|recommend(\/resource\/allocation|ContentV\d)))|\/(album\/paid\/info|playlist\/album\/new)|\/v\d\/album\/track) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly.js
https?:\/\/(mobile(hera)?|m(ob)?wsa|m)\.ximalaya\.com\/business-vip-(presale-mobile-web\/page|level-h5-web\/api\/(gift\/detail|profile)|welfare-mobile-web\/welfare\/module\/exclusive\/list) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly.js
https?:\/\/(mobile(hera)?|m(ob)?wsa|m)\.ximalaya\.com\/discovery-(category\/customCategories|feed\/v\d\/(freeListenTab\/queryCardList|mix)|ranking-web\/v\d\/ranking\/concreteRankList) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly.js
https?:\/\/(mobile(hera)?|m(ob)?wsa|m)\.ximalaya\.com\/(browsing-history-business\/browsing\/history\/query|focus-mobile\/focusPic\/info|nyx\/history\/query\/(detail|id\/list)|product\/detail\/v\d\/basicInfo\/dynamic|subscribe\/v\d\/subscribe\/comprehensive\/rank|vip\/(feed\/v1\/mix|v\d\/recommand)) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly.js
https?:\/\/search(wsa)?\.ximalaya\.com\/(hub\/)?(guideWordV\d|hotWord(V\d|Billboard\/card)) url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly.js
https?:\/\/(mobile(hera)?|m(ob)?wsa)\.ximalaya\.com\/(mobile-playpage\/track|mobile\/quickplay) url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly_ck.js

[mitm] 

hostname = *.ximalaya.com, 1.56.98.101, 42.56.64.*, 43.231.145.10, 47.100.227.85, 61.164.145.12, 61.172.194.*, 101.72.254.86, 101.89.44.*, 101.89.53.103, 106.41.204.126, 112.80.180.72, 112.98.170.228, 112.99.146.108, 114.80.99.*,  115.56.90.192, 116.136.188.184, 118.25.119.177, 119.188.180.230, 124.163.196.195, 180.153.140.*, 180.153.250.*, 180.153.255.*, 180.163.28.*, 183.134.98.189, 221.204.43.106, 222.161.212.*
*******************************/

const url = new URL($request.url);
const PATH = url?.pathname;
let path = PATH.replace(/(\/|\/ts-)\d+(\.\d+)?/g, '');
let body = JSON.parse($response.body);
switch (path) {
	case "/mobile-user/v2/homePage": //我的页面
		const entranceId = [210, 213, 215];
		body.data.anchorVipInfo.isVip = true;
		body.data.vipInfo = {
			"isVip": true,
			"iconUrl": "https://imagev2.xmcdn.com/storages/2fd2-audiofreehighqps/93/C6/GKwRIDoF9MpUAAAP_AEhz-MP.png!op_type=0&magick=webp",
			"jumpUrl": body.data.vipInfo.jumpUrl,
			"levelJumpUrl": "https://pages.ximalaya.com/business-vip-level-h5-web/profile?orderSource=app_Other_MyPage_VipCard&utm_source=app_Other_MyPage_VipCard",
			"status": 5,
			"tip": "永久会员特权",
			"level": 5,
			"generalIconHeight": 63,
			"generalIconWidth": 170
		}
		body.data.parentPaidStatus = "新用户";
		body.data.childTag.isChild = true;
		body.data.childTag.linkUrl = "https://m.ximalaya.com/gatekeeper/xmkp-xxm-h5/vip?ordersource=MyPageIcon";
		body.data.vipExpireTime = 1861804800000;
		body.data.isVip = true;
		body.data.vipLevel = 5;
		body.data.vipStatus = 5;
		body.data.isEnglishVip = true;
		body.data.parentPaidStatus = "非临期会员";
		body.data.serviceModule.entrances = body.data.serviceModule.entrances.filter(entrance => entranceId.includes(entrance.id))//签到中心、钱包、全部服务
		break;
	case "/mobile/playlist/album/new": //音频列表
		body.data = body.data.map(data => {
			data.isPaid = false;
			delete data.price;
			delete data.displayPrice;
			delete data.displayDiscountedPrice;
			delete data.discountedPrice;
			delete data.isFree;
			delete data.priceTypeId;
			delete data.priceTypeEnum;
			return data;
		});
		break;
	case "/mobile-playpage/playpage/tabs/v2": //播放页
		body.data.playpage.trackInfo.isPaid = false;
		delete body.data.playpage.trackInfo.type;
		delete body.data.playpage.trackInfo.relatedId;
		delete body.data.playpage.trackInfo.price;
		delete body.data.playpage.trackInfo.discountedPrice;
		delete body.data.playpage.trackInfo.priceTypeId;
		delete body.data.playpage.trackInfo.priceTypeEnum;
		delete body.data.playpage.trackInfo.displayPrice;
		delete body.data.playpage.trackInfo.displayDiscountedPrice;
		delete body.data.playpage.trackInfo.isVipFree;
		delete body.data.playpage.trackInfo.vipFreeType;
		delete body.data.playpage.trackInfo.hqNeedVip;
		delete body.data.playpage.trackInfo.permissionSource;
		body.data.playpage.trackInfo.isAntiLeech = false;
		body.data.playpage.trackInfo.priceTypes = [];

		body.data.playpage.albumInfo.isPaid = false;
		delete body.data.playpage.albumInfo.price;
		delete body.data.playpage.albumInfo.displayPrice;
		delete body.data.playpage.albumInfo.priceUnit;
		delete body.data.playpage.albumInfo.discountedPrice;
		delete body.data.playpage.albumInfo.priceTypeEnum;
		delete body.data.playpage.albumInfo.priceTypeId;
		delete body.data.playpage.albumInfo.isVipFree;
		delete body.data.playpage.albumInfo.canShareAndStealListen;
		delete body.data.playpage.albumInfo.canInviteListen;
		delete body.data.playpage.albumInfo.refundSupportType;
		delete body.data.playpage.albumInfo.isCpsProductExist;
		delete body.data.playpage.albumInfo.cpsPromotionRate;
		delete body.data.playpage.albumInfo.cpsProductCommission;
		delete body.data.playpage.albumInfo.ximiVipFreeType;
		body.data.playpage.albumInfo.vipFreeType = 0;
		body.data.playpage.talkBindings = [];
		body.data.playpage.yellowZone = {}; 
		break;
	case "/mobile-playpage/playpage/recommend/resource/allocation": //播放页标签栏
		body.data.recommendBarTab = body.data.recommendBarTab.filter(recommendBarTab => recommendBarTab.id !== 0) //过滤423特惠年卡广告
		break;
	case "/mobile-playpage/playpage/recommendContentV2": //播放页推荐详情
		body.data.recommendElementList = body.data.recommendElementList.filter(recommendElementList => !recommendElementList.bizType.includes('AD'))
		break;
	case "/mobile-playpage/track/v3/baseInfo": //单个音频
		delete body.trackInfo.type;
		delete body.trackInfo.relatedId;
		delete body.trackInfo.authorizedType;
		delete body.trackInfo.isVipFree;
		delete body.trackInfo.vipFreeType;
		delete body.trackInfo.hqNeedVip;
		delete body.trackInfo.permissionExpireTime;
		delete body.trackInfo.permissionSource;
		body.trackInfo.isAntiLeech = false;
		body.trackInfo.isPaid = false;
		delete body.albumInfo.saleScope;
		delete body.albumInfo.vipFreeType;
		body.albumInfo.isPaid = false;
		break;
	case "/mobile/v1/album/track": //专辑页音频列表
		body.data.list = body.data.list.map(list => {
			list.isPaid = false;
			delete list.price;
			delete list.displayPrice;
			delete list.displayDiscountedPrice;
			delete list.discountedPrice;
			delete list.isFree;
			delete list.priceTypeId;
			delete list.priceTypeEnum;
			return list;
		});
		break;
	case "/mobile/album/paid/info": //专辑付费信息
		body.isPaid = false;
		body.type = 0;
		delete body.vipFreeType;
		delete body.isVipFree;
		delete body.priceTypeEnum;
		delete body.isGoToAlbumPresalePage;
		delete body.newPage;
		delete body.priceTypeId;
		break;
	case "/business-vip-level-h5-web/api/gift/detail/": //会员页
		body.data.enable = true;
		body.data.content.title = "V5会员等级_月度礼包";
		body.data.content.id = 3003;
		body.data.content.giftList = [
			{
					"id": "17401",
					"description": "免费送知识红包\\n可送亲友6个",
					"giftType": "28",
					"context":
					{
							"giftCardId": "32",
							"quantity": 6
					},
					"iconUrl": "",
					"buttonContext": "去赠送",
					"jumpUrl": "https://pages.ximalaya.com/mkt/act/ab1542ad75015a78",
					"sortIndex": 1,
					"mainTitle": "免费送知识红包",
					"subTitle": "可送亲友6个"
			},
			{
					"id": "11906",
					"description": "免费送7天会员\\n可送亲友5张",
					"giftType": "15",
					"context":
					{
							"itemId": "1010500000114051",
							"quantity": 5
					},
					"iconUrl": "",
					"buttonContext": "去赠送",
					"jumpUrl": "https://m.ximalaya.com/gatekeeper/universal-gift-card/gift-record?_default_share=0&giftType=1",
					"sortIndex": 2,
					"mainTitle": "免费送7天会员",
					"subTitle": "可送亲友5张"
			},
			{
					"id": "23467",
					"description": "喜播课程大礼包\\n领5重好礼",
					"giftType": "16",
					"context":
					{
							"itemId": 1227,
							"itemKey": "2f14f8df60ad69e2"
					},
					"iconUrl": "",
					"buttonContext": "去使用",
					"jumpUrl": "https://m.ximalaya.com/gatekeeper/lms-sale-page?expGroupId=33&xbSource=55395",
					"sortIndex": 3,
					"mainTitle": "喜播课程大礼包",
					"subTitle": "领5重好礼"
			},
			{
					"id": "13656",
					"description": "直播贵族体验卡\\n伯爵7天",
					"giftType": "21",
					"context":
					{
							"itemId": 3085
					},
					"iconUrl": "https://imagev2.xmcdn.com/storages/29e2-audiofreehighqps/78/6C/GKwRIMAGo_-AAAArZQF9iI1h.png",
					"buttonContext": "去使用",
					"jumpUrl": "iting://open?msg_type=330&type=1&playSource=4055",
					"sortIndex": 4,
					"mainTitle": "直播贵族体验卡",
					"subTitle": "伯爵7天"
			}
		];
		break;
	case "/business-vip-level-h5-web/api/profile": //会员页
		body.data.vipProfileVo.expire = "2029-12-31 23:59:59";
		body.data.vipProfileVo.level = 5;
		body.data.vipProfileVo.value = 28888;
		body.data.vipProfileVo.state = 4;
		break;
	case "/business-vip-presale-mobile-web/page": //我的会员页
		body.data.modules = body.data.modules.map(module => {
			if(module.key === "userInfo"){
				module.userInfo.userLevel.userLevel = 5;
				module.userInfo.userLevel.userLevelIcon = "http://imagev2.xmcdn.com/storages/2fd2-audiofreehighqps/93/C6/GKwRIDoF9MpUAAAP_AEhz-MP.png";
				module.userInfo.vipStatus = 2;
				module.userInfo.subtitle = "永久会员";
			}else if(module.key === "productAdsResource"){
					module.vipStatus = 2;
			}else if(module.key === "vipProducts"){
					module.vipStatus = 2;
					module.renewTips = "您是永久会员";
			}else if(module.key === "jointVipProducts"){
					module.vipStatus = 2;
			}else if(module.key === "vipLevelPrivilege"){
					module.vipStatus = 2;
					module.userLevel = 5;
					module.level = {
						"title" : "会员等级",
						"btnText" : "去升级",
						"btnJumpUrl" : "https://m.ximalaya.com/gatekeeper/vip-grade?ts=1646193928#grow-tasks",
						"progress" : {
							"curLevel" : 5,
							"nextLevel" : 6,
							"curLevelPoint" : 25000,
							"nextLevelPoint" : 88888,
							"point" : 66666
						}
					};
			}else if(module.key === "vipPrivileges"){
					module.vipStatus = 2;
			}
			return module;
		});
		break;
	case "/business-vip-welfare-mobile-web/welfare/module/exclusive/list": //会员权益广告
		body.data.level = 5;
		body.data.templateVos = [];
		break;
	case "/browsing-history-business/browsing/history/query": //我的--历史--浏览历史
		body.data.list = body.data.list.map(list => { //list.type 1为有声书 2为直播（考虑去除）
			delete list.albumSubscript;
			list.paidAlbum = false;
			return list;
		});
		break;
	case "/discovery-category/customCategories": //首页导航栏
		const ids = ['lamia', 'html5-194', 'html5-97', 'single_category-1054'];
		body.categoryList && (body.categoryList = body.categoryList.map(categoryList => {
			return categoryList.itemList.filter(itemList => !ids.includes(itemList.id));
		}))
		body.customCategoryList && (body.customCategoryList = body.customCategoryList.filter(customCategoryList => !ids.includes(customCategoryList.id)))
		body.defaultTabList && (body.defaultTabList = body.defaultTabList.filter(defaultTabList => !ids.includes(defaultTabList.id)))
		break;
	case "/discovery-feed/v1/freeListenTab/queryCardList": //底部免费页
		body.sceneCards = body.sceneCards.map(sceneCards => {
			sceneCards.data.body.map(body => {
					if ('subElements' in body) {
							body.subElements.map(subElements => {
									if ('subElements' in subElements) {
											subElements.subElements.map(subElement => {
													subElement.status.isPaid = 0;
													return subElement;
											})
									}
									return subElements;
							})
					}
			return body;
			});
		return sceneCards;
		});
		break;
	case "/discovery-feed/v4/mix": //首页推荐标签
		body.showModules = "";
		body.body = body.body.map(body => {
			delete body.item.albumSubscript;
			delete body.item.angleTag;
			delete body.item.discountedPrice;
			delete body.item.priceUnit;
			delete body.item.priceTypeEnum;
			delete body.item.priceTypeId;
			delete body.item.vipFreeType;
			body.item.price = 0;
			body.item.isPaid = false;
			return body;
		});
		body.body = body.body.filter(body => body.mtlId !== 0);
		body.header && (body.header = body.header.filter(header => header.item.moduleType === "square"));
		break;
	case "/discovery-ranking-web/v6/ranking/concreteRankList": //排行榜
		body.data.subElements = body.data.subElements.map(subElement => {
			subElement.status.isPaid = 0;
			subElement.wrap.subscript = null;
			return subElement;
		});
		break;
	case "/focus-mobile/focusPic/info": //首页广告轮盘
		body.header = body.header.filter(header => {
			return header.item.list.filter(list => {
				list.data = list.data.filter(data => !data.isAd)
			})
		})
		break;
	case "/hub/guideWordV3": //搜索推荐
	case "/hub/hotWordV3": //搜索热词
		body.hotWordList = [];
		body.liveWordList && (body.liveWordList = []);
		break;
	case "/hub/hotWordBillboard/card": //搜索卡片
		body.resultList = [];
		break;
	case "/nyx/history/query/detail": //上次播放记录
		body.data.listenModels = body.data.listenModels.map(listenModel => {
			delete listenModel.albumSubscript;
			delete listenModel.isVipFree;
			delete listenModel.vipFreeType;
			delete listenModel.trackType;
			listenModel.type = 1;
			listenModel.paid = false;
			listenModel.isPaid = false;
			return listenModel;
		});
		break;
	case "/nyx/history/query/id/list": //我的页播放历史
		body.data.list = body.data.list.map(list => {
			//list.modelId = Math.abs(list.modelId);
			list.modelId = -list.modelId;
			return list;
		});
		break;
	case "/product/detail/v1/basicInfo/dynamic": //专辑详情页
		const validTypes = ['live', 'calendar', 'relatedContent', 'creator'];
		body.data.modules = body.data.modules.map(module => {
			if (module.type === "statusBar") {
				delete module.data.cpsProductCommission;
				delete module.data.cpsPromotionRate;
				delete module.data.knowledgeGiftPackageCount;
				delete module.data.presentEntranceUrl;
				module.data.isGlobalPrivateListen = false;
				module.data.isSupportCps = false;
			}
			if (module.type === "title") {
				delete module.data.albumSubscript;
				module.data.isVipFree = false;
			}
			if (validTypes.includes(module.type)) {
				delete module.dataUrl.dynamic.param.albumPrice;
				delete module.dataUrl.dynamic.param.albumItemId;
				delete module.dataUrl.dynamic.param.saleTypeId;
				module.dataUrl.dynamic.param.playingTrackId = module.dataUrl.dynamic.param.trackId;
			}
			if (module.type === "tab") {
				delete module.data.payableGuide; //试用会员提示
				delete module.data.activityInfo; //会员办理活动广告
				module.data.autoPlayInfo.tracks = module.data.autoPlayInfo.tracks.map(track => {
					delete track.discountedPrice;
					delete track.displayDiscountedPrice;
					delete track.displayPrice;
					delete track.price;
					delete track.priceTypeEnum;
					delete track.priceTypeId;
					delete track.isTrailer;
					delete track.permissionSource;
					track.isPaid = false;
					return track;
				})
			}
			return module;
		});
		body.data.modules = body.data.modules.filter(module => module.type !== "purchasePrompt");
		break;
	case "/subscribe/v2/subscribe/comprehensive/rank": //底部订阅页
		body.data.albumResults = body.data.albumResults.map(albumResult => {
			albumResult.isPaid = false;
			delete albumResult.isVipFree;
			delete albumResult.vipFreeType;
			delete albumResult.priceTypeEnum;
			delete albumResult.albumSubscript;
			return albumResult;
		});
		break;
	case "/vip/v1/recommand": //导航会员页
		body.data.expireTime = 4102415999000;
		body.data.vipStatus = 2;
		body.data.isFreeTrail = true;
		body.data.lifeStatus = 11;
		body.data.channelLifeStatus = 3;
		let flag = false;
		body.data.modules = body.data.modules.map(module => {
			if (module.moduleType.includes("VIP_NEW_STATUS")) {
				module.moduleType = "VIP_NEW_STATUS_V6";
				module.vLogo = "http://imagev2.xmcdn.com/storages/4741-audiofreehighqps/7C/4E/GMCoOR8IDDSzAALK-gIN-_B4.webp";
				module.cardTitles = [
					{
							"text": "会员礼包免费领",
							"buttonText": "永久会员",
							"buttonImage": "",
							"buttonUrl": "iting://open?msg_type=14&_ka=1&url=https%3A%2F%2Fpages.ximalaya.com%2Fbusiness-vip-level-h5-web%2Fprofile%3ForderSource%3Dpindaoye%26utm_source%3Dpindaoye",
							"cardType": "vipRenewalCardTitle"
					},
					{
							"text": "会员不限时免费领",
							"buttonText": "永久会员",
							"buttonImage": "",
							"buttonUrl": "iting://open?msg_type=313&albumId=${albumId}&vipSpuId=100000&vipCategoryId=105&__itingOrginURL=313&fallbackUrl=https://m.ximalaya.com/vip/product/ts-1523860636277&orderSource=app_Other_NewVipChannel_VipCard",
							"cardType": "vipRenewalCardTitle"
					}
				];
				module.vipLevel = {
					"currentLevel": 5,
					"nextLevel": 6,
					"valueToUpGrade": 666,
					"levelUrl": "https://m.ximalaya.com/business-vip-level-h5-web/profile?utmsource=vipchannel",
					"levelIcon": "http://imagev2.xmcdn.com/storages/2fd2-audiofreehighqps/93/C6/GKwRIDoF9MpUAAAP_AEhz-MP.png!op_type=0&unlimited=0"
				};
				delete module.buttonText;
				delete module.buttonUrl;
			}
			if (module.moduleType === "RECOMMENDATION") {
				module.albums.map(album => {
					album.isPaid = false;
					delete album.priceTypeId;
					delete album.price;
					delete album.discountedPrice;
					delete album.displayPrice;
					delete album.displayDiscountedPrice;
					delete album.priceUnit;
					delete album.isVipFree;
					delete album.vipFreeType;
					delete album.priceTypeEnum;
					return album;
				})
			}
			if (module.moduleType === "NEW_ALBUM_RESERVATION") {
				module.reservationTabs.map(reservationTab => {
					reservationTab.albums.map(album => {
						delete album.albumSubscript;
						return album;
					})
					return reservationTab;
				})
			}
			if (module.moduleType === "VIP_SQUARE") {
				flag = true;
			}
			return module;
		})
		const vip_square = {
			"moduleType": "VIP_SQUARE",
			"sortEnable": false,
			"moduleId": 883,
			"moduleName": "新版糖葫芦-送礼品卡-0103更新",
			"list":
			[
					{
							"title": "会员等级",
							"icon": "http://imagev2.xmcdn.com/storages/84ce-audiofreehighqps/61/8F/GKwRIJIICbEsAAAEBgINM9Gw.png!op_type=0&magick=webp&unlimited=0",
							"type": 6,
							"value": "https://pages.ximalaya.com/business-vip-level-h5-web/profile?orderSource=pindaoye&utm_source=viptanghulu",
							"iconForNight": "http://imagev2.xmcdn.com/storages/c1c7-audiofreehighqps/A8/6A/GKwRIUEICbEvAAAEMwINM9MY.png!op_type=0&magick=webp&unlimited=0",
							"name": "全量展示",
							"userGroupId": ""
					},
					{
							"title": "福利社",
							"icon": "http://imagev2.xmcdn.com/storages/8c75-audiofreehighqps/2A/C1/GMCoOScICbCyAAAC_wINM5VD.png!op_type=0&magick=webp&unlimited=0",
							"type": 6,
							"value": "https://m.ximalaya.com/gatekeeper/member-welfare/home",
							"iconForNight": "http://imagev2.xmcdn.com/storages/1797-audiofreehighqps/57/BB/GMCoOSIICbC2AAADYwINM5dY.png!op_type=0&magick=webp&unlimited=0",
							"name": "全量展示",
							"userGroupId": ""
					},
					{
							"title": "直播特权",
							"icon": "http://imagev2.xmcdn.com/storages/f4eb-audiofreehighqps/95/05/GMCoOSAICbCdAAACwgINM4p0.png!op_type=0&magick=webp&unlimited=0",
							"type": 6,
							"value": "https://mlive.ximalaya.com/gatekeeper/vip-welfare-upgradation/vipWelfareUpgradation?channelId=VIP&_default_share=0",
							"iconForNight": "http://imagev2.xmcdn.com/storages/feea-audiofreehighqps/A7/53/GMCoOScICbCfAAADKwINM4uH.png!op_type=0&magick=webp&unlimited=0",
							"name": "全量展示",
							"userGroupId": ""
					},
					{
							"title": "送礼品卡",
							"icon": "http://imagev2.xmcdn.com/storages/74df-audiofreehighqps/AF/85/GKwRIDoICbCHAAADYwINM3-2.png!op_type=0&magick=webp&unlimited=0",
							"type": 6,
							"value": "https://m.ximalaya.com/gatekeeper/universal-gift-web?utm_source=hythl",
							"iconForNight": "http://imagev2.xmcdn.com/storages/2038-audiofreehighqps/17/FC/GKwRIaIICbCKAAADpQINM4Fc.png!op_type=0&magick=webp&unlimited=0",
							"name": "全量展示",
							"userGroupId": ""
					},
					{
							"title": "不展示",
							"icon": "http://imagev2.xmcdn.com/storages/2b6e-audiofreehighqps/ED/90/GMCoOR8ICcB3AAAx_gINOzaj.png!op_type=0&magick=webp&unlimited=0",
							"type": 6,
							"value": "https://m.ximalaya.com/marketing/vip-rights-desc/index?utm_source=viptab",
							"iconForNight": "http://imagev2.xmcdn.com/storages/a660-audiofreehighqps/95/35/GMCoOSAICcB3AAAx_gINOzbU.png!op_type=0&magick=webp&unlimited=0",
							"userGroupId": ""
					}
			],
			"squareType": "PICTURE_AND_TEXT",
			"squareClassType": "SINGLE_FIVE"
		};
		!flag && body.data.modules.splice(2, 0, vip_square);
		body.data.modules = body.data.modules.filter(module => module.moduleType !== "ACTIVITY_CARD");
		break;
	case "/vip/feed/v1/mix": //未知
	 	body.data.items = body.data.items.map(item => {
			item.isPaid = false;
			delete item.vipFreeType;
			return item;
		});
		break;
}
$done({ body: JSON.stringify(body) });


//https://github.com/NanoCat-Me/URL
function URL(a){return new class{constructor(a,b=void 0){return a=this.parse(a,b),this}parse(a,b=void 0){const c=/(?:(?<protocol>\w+:)\/\/(?:(?<username>[^\s:"]+)(?::(?<password>[^\s:"]+))?@)?(?<host>[^\s@/]+))?(?<pathname>\/?[^\s@?]+)?(?<search>\?[^\s?]+)?/,d=/(?<hostname>.+):(?<port>\d+)$/;if(a=a.match(c)?.groups||{},b&&(b=b?.match(c)?.groups||{},!b.protocol||!b.hostname))throw new Error(`🚨 ${name}, ${b} is not a valid URL`);if((a.protocol||b?.protocol)&&(this.protocol=a.protocol||b.protocol),(a.username||b?.username)&&(this.username=a.username||b.username),(a.password||b?.password)&&(this.password=a.password||b.password),(a.host||b?.host)&&(this.host=a.host||b.host,Object.freeze(this.host),this.hostname=this.host.match(d)?.groups.hostname??this.host,this.port=this.host.match(d)?.groups.port??""),!(a.pathname||b?.pathname))this.pathname="";else if(this.pathname=a.pathname||b?.pathname,this.pathname.startsWith("/")||(this.pathname="/"+this.pathname),this.paths=this.pathname.split("/").filter(Boolean),Object.freeze(this.paths),this.paths){const a=this.paths[this.paths.length-1];if(a?.includes(".")){const b=a.split(".");this.format=b[b.length-1],Object.freeze(this.format)}}if((a.search||b?.search)&&(this.search=a.search||b.search,Object.freeze(this.search),this.search)){const a=this.search.slice(1).split("&").map(a=>a.split("="));this.searchParams=new Map(a)}return this.harf=this.toString(),Object.freeze(this.harf),this}toString(){let a="";return this.protocol&&(a+=this.protocol+"//"),this.username&&(a+=this.username+(this.password?":"+this.password:"")+"@"),this.hostname&&(a+=this.hostname),this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.searchParams&&(a+="?"+Array.from(this.searchParams).map(a=>a.join("=")).join("&")),a}toJSON(){return JSON.stringify({...this})}}(a)}
