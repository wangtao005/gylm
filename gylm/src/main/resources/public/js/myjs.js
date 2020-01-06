$(function(){
    var baseUrl1 = window.location.origin;
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
		      content: '\<\div style="padding:20px;"  align="middle"><img src="'+baseUrl1+'/image\/183weixincode.jpg" style="height: 150px;width: 150px;"><\/br><H2 style="padding:40px;" >请使用微信扫描二维码添加客服咨询<\/H2>     \<\/div>'
		    });
		  });
});
//360代码自动提交代码
(function(){
    var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
    document.write('<script src="' + src + '" id="sozz"><\/script>');
})();







