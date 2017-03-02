$(function(){
    $('nav').find('a').click(function(){
        $(this).css({color:'#ccc'}).siblings().css('color','#fff');
    });

    // 轮播
    var i=0;
    var j=0;
    function lb(){
        i++;
        $('.banner ul li').find('p').eq(j).css({width:i+'%',background:'#999'})

    timer=setTimeout(function(){lb();}, 50);
    if(i>99){
        i=0;
        $('.banner').find('.img').eq(j).fadeOut(1000).next().fadeIn(1000);
        j++;
        if(j>2){
            j=0;
            $('.banner ul li').find('p').css({width:'0'});
            $('.banner').find('.img').eq(0).fadeIn(1000);
        }  
    }
    }
    
    lb();
 // 点击停止轮播,进行点击切换
        $('.banner ul li').click(function(){
            var is=$(this).index();
            clearTimeout(timer);
            $('.banner').find('.img').eq(is).fadeIn(1000).siblings('.img').css('display','none');
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