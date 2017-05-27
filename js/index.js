$(function () {
    // 顶部点击切换
    $('.titlebox .title').on('click',function () {
        var index=$(".titlebox .title").index(this);
        $(".titlebox .title").removeClass("click").eq(index).addClass("click");
        $(".main .menu").removeClass("xianshi").eq(index).addClass("xianshi");
    });
});
