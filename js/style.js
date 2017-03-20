$(function(){
    // $('nav').find('a').click(function(){
    //     $(this).css({color:'#ccc'}).siblings().css('color','#fff');
    // });

    // 轮播
    var i=0;
    var j=0;
    function lb(){
        i++;
        $('.banner ul li').find('p').eq(j).css({width:i+'%',background:'#999'})

    timer=setTimeout(function(){lb();}, 30);
    if(i>99){
        i=0;
        $('.banner').find('.img').eq(j).fadeOut(800).next().fadeIn(800);
        j++;
        if(j>2){
            j=0;
            $('.banner ul li').find('p').css({width:'0'});
            $('.banner').find('.img').eq(0).fadeIn(800);
        }  
    }
    }
    
    lb();
 // 点击停止轮播,进行点击切换
        $('.banner ul li').click(function(){
            // 点击li时获取当前li的index（）
            var is=$(this).index();
            // 清除定时器让图片不在轮播
            clearTimeout(timer);
            // 找到要显示的图片，eq(is)，is是几就显示第几张图
            $('.banner').find('.img').eq(is).fadeIn(1000).siblings('.img').css('display','none');
            // 当前li里面的p宽度100%，其他的0；parent（）是查找父级元素
            $(this).find('p').css({width:'100%',background:'#999'}).parent().siblings().find('p').css('width','0');
            
        })

        // 左右箭头
        $('.banner').on('mousemove',function(e){
            var sw=$(window).width()/4;
            var x=e.pageX;
            // console.log(x);
            if(x<sw){
              $('.banner .prev').fadeIn(800);
            }else if(x>sw*3){
              $('.banner .next').fadeIn(800)
            }else{
              $('.banner>span').fadeOut(800)
            }
        })
        // 左箭头点击事件
        $('.banner .prev').click(function(){
           clearTimeout(timer);
           var jj=j--;
           
           if(jj<0){
            
            
            $('.banner').find('.img').eq(2).fadeIn(1000).siblings('.img').css('display','none');
             $('.banner ul li').find('p').eq(2).css({width:'100%',background:'#999'}).parent().siblings().find('p').css('width','0');
            j=3;
            setTimeout(function(){lb();}, 500)
           }else{
            $('.banner').find('.img').eq(jj).fadeIn(1000).siblings('.img').css('display','none');
            $('.banner ul li').find('p').eq(jj).css({width:'100%',background:'#999'}).parent().siblings().find('p').css('width','0');
           }
            
        }) 

        // 右箭头点击事件
        $('.banner .next').click(function(){
           clearTimeout(timer);
           var jj=j++;
           
           if(jj>2){
            console.log(jj);
            $('.banner').find('.img').eq(0).fadeIn(1000).siblings('.img').css('display','none');
            $('.banner ul li').find('p').eq(0).css({width:'100%',background:'#999'}).parent().siblings().find('p').css('width','0');
            j=0;
            setTimeout(function(){lb();}, 500)
           }else{
            $('.banner').find('.img').eq(jj).fadeIn(1000).siblings('.img').css('display','none');
            $('.banner ul li').find('p').eq(jj).css({width:'100%',background:'#999'}).parent().siblings().find('p').css('width','0');
           }
            
        }) 

})


$(function(){
//mac页面头部图标导航
//位移要把 .tabnav div的style="display:none"去掉，把margin:0 auto;改为margin-left：40%
$('.tbnav .div').animate({marginLeft:'25%'},2000);
$('.tbnav .iphone').animate({marginLeft:'35%'},1500);
//显示要添加style，把margin-left：40%改为margin:0 auto;
// $('.tbnav div').show(2000)

// mac页面图标选项卡
$('.mactab .top .tab p').click(function(){
    var ip=$(this).index();
    $(this).attr('class','active').siblings().removeClass();
    $('.mactab .top .warps').find('.warp').eq(ip).attr('class','warp active').siblings().attr('class','warp')
});

$('.mactab .botop .tab p').click(function(){
    var ips=$(this).index();
    $(this).attr('class','active').siblings().removeClass();
    $('.mactab .botop .warps').find('.warp').eq(ips).attr('class','warp active').siblings().attr('class','warp')
})


})