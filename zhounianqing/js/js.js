/**
 * Created by yuqing on 2016/3/29.
 */
$(function(){
    $("li").click(function(){
        $(this).find(".pos").toggle();
        $(this).siblings('li').children(".pos").hide();
    });
})
