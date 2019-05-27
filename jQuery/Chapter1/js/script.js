$(document).ready(function() {
    // $('a').click(function() {
    //     $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    // });

    //鼠标双击事件
    // $('a').dblclick(function(){
    //     $('img').eq($(this).index())
    //     .css({'opacity':'1'})
    //     .siblings().css({'opacity':'0'});
    // });


   //鼠标按下时触发
   $('a').mousedown(function(){
       console.log("鼠标按下图片"+$(this).index()+"了");
   });
   //按下鼠标放松时触发

//    $('a').mouseup(function(){
//         $('img').eq($(this).index()).css({'opacity':'1'})
//           .siblings().css({'opacity':'0'});
//    })


    //鼠标进入
    // $('a').mouseenter(function(){
    //     $('img').eq($(this).index()).css({'opacity':'1'})
    //       .siblings().css({'opacity':'0'});
    // })
    
    // //鼠标移开
    // $('a').mouseleave(function(){
    //     console.log("鼠标移开"+$(this).index()+"图片了");
    // });

    //hover鼠标进入和退出
    $('a').hover(function(){
        $('img').eq($(this).index()).css({'opacity':'1'})
          .siblings().css({'opacity':'0'});
    },function(){
        $('img').eq($(this).index()).css({'opacity':'0'})
          .siblings().css({'opacity':'1'});
    });
});

