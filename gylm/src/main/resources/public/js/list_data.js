$(function(){
	$('#ask').on('click', function(){
			  var h = document.body.clientHeight;
				 var hh = h/8;
				 if(h<400){
					 hh=0; 
				 }
		    layer.open({
		      type: 1,
		      skin: 'demo-class',
		      offset: hh,
			// area: ['500px', '360px'],
		      shadeClose: true, //点击遮罩关闭
		      content: '\<\div style="padding:20px;"  align="middle"><img src="../../image\/183weixincode.jpg" style="height: 150px;width: 150px;"><\/br><H2 style="padding:40px;" >请使用微信扫描二维码添加客服咨询<\/H2>     \<\/div>'
		    });
		  });
    appendNewList(1,pageSize);
});
var new_list=[];
var new_list_info =[
        {  url:"../information/17/17.html",
            title:"渠道服务商3天拓店100家的秘密",
            date:"2018-09-12",
            info:"因为无人脉无资源，再加上又想把高佣联盟做好。想要升级总监，最终选择去地推。通过我的努力四十天升级了运营总监。或许有过地推的经验，我也敢迈出步去陌生人沟通。但是地推和本地生活有截然不同，地推拿着礼品，别人会主动来咨询。而本地生活是需要我们主动去和商家去谈。 "
        },
        {  url:"../information/16/16.html",
            title:"高佣新手必须修炼的六条内功心法",
            date:"2018-09-12",
            info:"什么是高佣联盟？很多家人们可能到现在还不是太明白，其实说白了就是商家亏本促销打广告的地方。我们平时在淘宝买东西，搜索以后通常就会选择销量高、评价好的买。所以销量决 "
        },
        {  url:"../information/15/15.html",
            title:"如何守住你的江山，管理你的千军万马",
            date:"2018-09-05",
            info:"高佣联盟如何守住你的江山，管理你的千军万马如此的团结又竞争，就像我们职场上的状况。想象一下自己是否有合群的态度自己的竞争优势又在哪里。 "
        },
        {  url:"../information/14/14.html",
            title:"做高佣圈不住ta的心 因为你少走了这8步",
            date:"2018-09-05",
            info:"做高佣圈不住ta的心？因为你少走了这8步，请见详情。"
        },
        {  url:"../information/13/13.html",
            title:"十分钟成交意向代理——6招来“撩”你",
            date:"2018-09-05",
            info:"今天的课程时间不长，所以呢，我还有时间给大家讲一个故事，一个真实的故事。十分钟成交意向代理——6招来“撩”你"
        },
        {  url:"../information/12/12.html",
            title:"让你微信被加爆的吸粉方法",
            date:"2018-08-06",
            info:"高佣联盟上线近五个月了，相信大家都对高佣联盟有了一定的了解，也做了一定的推广，尤其是像我们学员中不乏有能力、有流量的伙伴，五个月来月入过万的大有人在。"
        },
        {  url:"../information/11/11.html",
            title:"关于高佣联盟的未来规划和发展",
            date:"2018-07-16",
            info:"高佣联盟创始人授课:关于高佣联盟的未来规划和发展！"
        },
        {  url:"../information/10/10.html",
            title:"高佣联盟发单-云发单",
            date:"2018-05-10",
            info:"高佣联盟云发单介绍及使用方法"
        },
        {  url:"../information/9/9.html",
            title:"高佣联盟如何地推",
            date:"2018-04-14",
            info:"今天围绕没人脉怎么办，高佣联盟地推的方法： 一个微信好友不到100人的代理通过一个方法，一周直推800多人，团队裂变3000多人 想知道他高佣联盟地推怎么做的么? 很多人说，我有人脉了再"
        },
        {  url:"../information/8/8.html",
            title:"高佣联盟京东商品免单玩法及讲解",
            date:"2018-04-12",
            info:"第一步： 1. 制作个人微信二维码海报（不是高佣联盟邀请码，是微信二维码） 2.文案带海报发圈，转发抢1000万京东免单产品！ 3.转发圈6小时以上，审核通过，拉进群，群里带 4. 注册 "
        },
        {  url:"../information/7/7.html",
            title:"拼多多商家如何加入高佣联盟推广",
            date:"2018-04-08",
            info:"拼多多商家加入高佣联盟进行推广需要收取服务费用，先与我们沟通具体商品，佣金比例，券后价格及库存，审核后拼多多商家即可在高佣联盟进行推广。拼多多cps是拼团类社交电商的 "
        },
        {  url:"../information/6/6.html",
            title:"拼多多商家推广",
            date:"2018-04-07",
            info:"高佣联盟如何协助商家提高销量： 高佣联盟如何帮助商家为商家服务： 1、 协助拼多多商家提高商品基础销量，我们有超过 1000 万的拼多多优质用户，我们可以协助商家商品从零星"
        },
        {  url:"../information/5/5.html",
            title:"高佣联盟吸粉",
            date:"2018-03-07",
            info:"利用满足人们喜欢看高清电影，电视剧得这种大众化需求来进行引流。 很多人都喜欢看电影和追剧，一般他们会去 几大视频网站（优酷，爱奇艺，乐视，芒果TV等等）去看，但是这些"
        },
        {  url:"../information/4/4.html",
            title:"高佣联盟官方注册渠道_高佣联盟",
            date:"2018-03-07",
            info:"2018年3月2日已有邀请码但是没有激活成功的用【微信扫一扫】这个二维码注册渠道激活。详情...."
        },
        {  url:"../information/3/3.html",
            title:"高佣联盟的赚钱模式及常见问题",
            date:"2018-03-07",
            info:"高佣联盟的赚钱模式及常见问题,高佣联盟平台和拼多多达成合作协议,具体问题点击查看详情"
        },
        {  url:"../information/2/2.html",
            title:"高佣联盟推广术语",
            date:"2018-03-07",
            info:"高佣联盟，0投资，0成本创业，真正利人利己。自用省钱：平台不触碰资金完全没有资金安全这个担忧概念！领完优惠券直接去拼多多就可购物结算发货，享受高级的优惠待遇。"
        },
         {  url:"../information/1/1.html",
            title:"高佣联盟收费吗",
            date:"2018-03-07",
            info:"简单讲，任何人参与都是免费的，都可以通过分享赚推广佣金。但是你要做大当做一个事业来做，你就要升级为总监获得更好权益，并且带更多人成长"
        }

];

for (var i=0;i<new_list_info.length;i++) {
        var value = new_list_info[i];
        var new_1 = '<article style="padding-top: 10px;margin-bottom: 0;padding-bottom: 0;border-bottom: #ff00ff solid 1px;">' +
            '<div class="new_list">' +
            '<div>' +
            '<figure ><a style=\'background: url(../../image/gylm.png) no-repeat 0 0;\' href="'+value.url+'">日志样式</a></figure>' +
            '<h4><a style=\'color: #000;\' href="'+value.url+'" class="external">'+value.title+'</a></h4>' +
            '<aside ><span class="entry-date">高佣联盟官网：'+value.date+'</span></aside>' +
            '</div>' +
            '<p >'+value.info+'<a href="'+value.url+'"> [查看全文]</a>' +
            '</p>' +
            '</div>' +
            '</article>';
        new_list.push(new_1);
}
var pageSize = 5;
var total = Math.ceil(new_list.length/pageSize);
$(function() {
    if($("#pagination")){
        $("#pagination").pagination({
            currentPage: 1,
            totalPage: total,
            callback: function(current) {
                // $("#current1").text(current);
                $("#new_list").empty();
                appendNewList(current,pageSize);
            }
        });
    }
});
function appendNewList(page,pageSize){
    if (!page){
        i=page-1;
    } else{
        i=(page-1)*pageSize;
    }
    var mt = pageSize;
    for ( i;i<new_list.length;i++) {
        if(mt==0){  break; }
        $("#new_list").append(new_list[i]);
        mt--;
    }
}











