//loadMainPage('.content-item', 'pages/home/home.html')

// 一键换肤 -- 显示、隐藏
$('#changeSkin').click(function (e){
    e.stopPropagation()
    $(this).children('.panel').slideToggle(30);
})


// 下滑线
// var lineArr = [];// 排他
// $('.start-use, .page-show').each(function (index, item){
//     lineArr.push($(item));
//     $(item).click(function (e){
//         e.stopPropagation()
//         $(lineArr).each(function (i, v){ v.children('.line').hide() })// 排他
//         $(this).children('.line').show()
//     })
// })


// 点击logo 下划线消失
// $('.logo').click(function (){
//     $(lineArr).each(function (i, v){ v.children('.line').hide() })// 排他
// });

// document
$(document).click(function () {
    $('#changeSkin').children('.panel').slideUp(30);
});










// 1. index页面跳转页面，根据root 找页面
// 2. 分页面找css文件，也是根据 root, 找图片也是
// 3. css文件找 背景图片，先到根目录，在找图片