$(function(){
	$('.yuan-dian li').on('click',function(){
	    var index=$(this).index();
	    $('.box1-1>ul').stop().animate({left:'-'+(index*780)+'px'},1000,)
	    $(this).css({background:'#be1a1a'}).siblings().css({background:'transparent'})
		$('.box1-div').eq(index).addClass('zuodonghu').parent().siblings().children().removeClass('zuodonghu')
	})
	$('.box3-1-ul li').hover(function(){
		$(this).children('div').eq(0).addClass('j-1').removeClass('c-1');
		$(this).children('div').eq(1).addClass('j-2').removeClass('c-2');
		$(this).children('div').eq(2).addClass('j-3').removeClass('c-3');
	},function(){
		$(this).children('div').eq(0).removeClass('j-1').addClass('c-1')
		$(this).children('div').eq(1).removeClass('j-2').addClass('c-2')
		$(this).children('div').eq(2).removeClass('j-3').addClass('c-3')
	})
	$('.box3 input').on('click',function(){
		var index=$(this).index();
		$('.mtt-5 ul').eq(index).show().siblings().hide();
		$(this).css({background:'#BE1A1A'}).siblings().css({background:'#000000'})
		$('.box3-1-ul li').children().removeClass('c-1 c-2 c-3');
	})
	// 汽车滚动条事件
	var box4=document.querySelector('.box4');
	var ppoo=box4.offsetTop;
	var gaodu=box4.offsetHeight;
	document.body.onscroll=function(){
		box4.scrollTop=document.documentElement.scrollTop-ppoo+gaodu
	}
	$('.ddyy span').on('click',function(){
		var index1=$(this).index();
		$('.box5-ul').stop().animate({left:'-'+(index1*1174)+'px'},100,)
		$(this).css({background:'#be1a1a'}).siblings().css({background:'transparent'})
	})
})
