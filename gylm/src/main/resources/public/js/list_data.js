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
         {  url:"../information/1/1.html",
            title:"高佣联盟收费吗",
            date:"2018-03-07",
            info:"简单讲，任何人参与都是免费的，都可以通过分享赚推广佣金。但是你要做大当做一个事业来做，你就要升级为总监获得更好权益，并且带更多人成长"
        },
         {  url:"/37.html",
            title:"高佣联盟4.2版本功能",
            date:"2019-12-23",
            info:"高佣联盟4.0版本功能介绍，本次版本的升级主要有个5比较大的改动和大家同步这几个改动都是和大家的使用息息相关的，首先和大家说说首页的改版内容"
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











