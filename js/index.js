(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //活动秘籍按钮
    $('.messBtn').on('click',function () {
        $('.hdgz').fadeIn();
        showMask();
    });
    //弹窗关闭按钮
    $('.close').on('click',function () {
        $(this).parents('div').fadeOut();
        hideMask();
    });
    //弹窗确定按钮
    $('.entBtn').on('click',function () {
        $(this).parents('div').fadeOut();
        hideMask();
    });
    //抽拼图按钮
    $('.cjBtn').on('click',function () {
        //$('.cz').fadeIn();
        //$('.jq').fadeIn();
        $('.mjh').fadeIn();
        showMask();
    });
    //查看我的礼包按钮
    $('.lookBtn').on('click',function () {

    });
    //显示查看我的礼包按钮隐藏抽拼图按钮
    function showLookBtn() {
        $('.lookBtn').show();
        $('.cjBtn').hide();
    }
    //showLookBtn();


    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }
});
