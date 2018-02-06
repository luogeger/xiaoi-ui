//  目录结构 - tree-view-slim
//  ==================================================
+function () {
    $('.i-tree-view-slim li').each(function (index, item){
        var _item = $(item);// 这是 li 标签
        // hover -- 效果
        _item.children('a').hover(function (){
            var _this = $(this);
            if(_this.hasClass('flag-open')){
                return;
            }
            _this.toggleClass('a-hover');
        },function (){
            var _this = $(this);
            _this.removeClass('a-hover');
        })

        // 点击 -- 展开目录
        if(_item.has('ul').length){
            collapse(_item, 'if');// 展开目录 -- 如果有 子级菜单
        }else{
            collapse(_item);// 展开目录 -- 没有 子级菜单
        };
    });

    // 展开目录
    function collapse (_item, flag){
        if(flag == 'if'){
            _item.children('a').prepend('<i class="icon-contract"></i>');
            _item.children('ul').css({'display': 'none'});
            _item.children('a').click(function (){
                var _this = $(this);
                clearClick();// 遍历所有 a 标签，清除 点击样式
                if(_this.hasClass('flag-open')){
                    _this.siblings('ul').slideToggle(100);
                    _this.children('i').css({'transform':'rotate(0deg)'});
                    _this.removeClass('flag-open');
                    _this.addClass('a-hasChild');
                    return;
                }
                _this.siblings('ul').slideToggle(100);
                _this.children('i').css({'transform':'rotate(90deg)'});
                _this.addClass('flag-open a-hasChild');
            });
        }
        else{
            _item.children('a').prepend('<i class="icon-circle"></i>');
            _item.children('a').click(function (){
                clearClick();// 遍历所有 a 标签，清除 点击样式
                $(this).addClass('a-noChild');
            });
        };

        // 遍历所有 a 标签，清除 点击样式
        function clearClick (){
            $('.i-tree-view-slim li').each(function (i, v){
                $(v).children('a').removeClass('a-noChild a-hasChild');
            })
        };
    };

}();