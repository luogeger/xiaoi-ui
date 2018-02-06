//  添加icon
//  ==================================================
addPrefix();
function addPrefix (){
    $('i[class*=icon], span[class*=icon]').each(function (index, item){
        if(!$(item).hasClass('icon iconfont')){
            $(item).addClass('icon iconfont');
        }
    });
};