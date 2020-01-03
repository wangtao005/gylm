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
var pageSize = 10;
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











