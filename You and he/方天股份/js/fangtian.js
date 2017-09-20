$(".shou0").hover(function(){
    this.style.color="royalblue"
},function(){
    this.style.color="black"
})



$(".shou1").mouseover(function(){
    $(".nav1").show()
})
$(".shou1").mouseout(function(){
    $(".nav1").hide()
})
$(".shou2").mouseover(function(){
    $(".nav2").show()
})
$(".shou2").mouseout(function(){
    $(".nav2").hide()
})
$(".shou3").mouseover(function(){
    $(".nav3").show()
})
$(".shou3").mouseout(function(){
    $(".nav3").hide()
})
$(".shou4").mouseover(function(){
    $(".nav4").show()
})
$(".shou4").mouseout(function(){
    $(".nav4").hide()
})
$(".shou5").mouseover(function(){
    $(".nav5").show()
})
$(".shou5").mouseout(function(){
    $(".nav5").hide()
})
$(".shou6").mouseover(function(){
    $(".nav6").show()
})
$(".shou6").mouseout(function(){
    $(".nav6").hide()
})



$(".nav0").mouseover(function(){
    $(this).show()
})

$(".nav0").mouseout(function(){
   $(this).hide()
})

// 轮播图
    var index = 1;

    function zidong(){

    index = index ==3? 0 :index;
    index ++;

    $(".lunbos").attr('src',`img/${index}.png`)
    
}

// 循环 执行

   

    $(".lunbo0").hover(function(){
       clearInterval(sss)
       console.log('1111111111')
    },function (){
          sss =  setInterval(zidong,3000)
    })
    
    sss =  setInterval(zidong,3000)
  
    



