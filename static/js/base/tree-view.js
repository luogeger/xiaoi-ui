//  树形菜单 - tree-view
//  ==================================================
+function () {
    $('.i-tree-view li').each(function (index, item){
        var _item = $(item);// 这个是 li 标签

        _item.prepend('<i class="icon-fold-close-fill"></i>');
        if(_item.has('ul').length){
            _item.prepend('<i class="icon-plus-square"></i>');
            collapse(_item);// 展开目录
        }else{
            _item.prepend('<i class="icon-min-square"></i>');
        }

        _item.children('span').dblclick(function (){
            // 双击的时候，让其他的 未保存/取消 的状态消失, -- 必须放在 rename() 的前面
            $('.i-tree-view li .change .cancel').each(function (i, v){ $(v).trigger('click'); });

            rename(this);// 改名
        });
    });

    // 展开目录
    function collapse (_item){
        _item.children('ul').css({'display': 'none'});
        _item.children('.icon-min-square').addClass('icon-plus').removeClass('icon-min-square');
        _item.children('.icon-plus-square').click(function (){
            if($(this).hasClass('flag-open')){
                $(this).removeClass('flag-open');
                $(this).addClass('icon-plus-square').removeClass('icon-min-square');
                $(this).siblings('ul').slideToggle(100);
                return;
            }
            $(this).addClass('icon-min-square').removeClass('icon-plus-square');
            $(this).siblings('ul').slideToggle(100);
            $(this).addClass('flag-open');
        })
    };

    // 改名
    function rename (self){
        var _this = $(self);// 这个是 span 标签
        var width = _this.width() + 15 + 'px';
        var html = '<div class="change">' +
            '<input type="text">' +
            '<i class="cancel icon-close-square"></i>' +
            '<i class="save icon-check-square"></i>' +
            '</div>';
        _this.after(html);
        addPrefix();// 添加前缀
        _this.siblings('.change').children('input').css('width', width);
        _this.siblings('.change').children('input').val(_this.text());
        _this.css({'display': 'none'});

        var changeDiv = _this.siblings('.change');// input、cancel、save 的父元素div

        changeDiv.children('input')[0].select();// input 里面的文字被选中
        changeDiv.children('input').click(function (e){
            e.stopPropagation();
        });

        changeDiv.children('.cancel').click(function (e){
            e.stopPropagation();
            cancelRename(_this, changeDiv);// 取消改名
        });

        changeDiv.children('.save').click(function (e){
            saveRename(_this, changeDiv);// 保存改名
            e.stopPropagation();
        });
    };

    // 取消改名
    function cancelRename (span, div){
        div.remove();
        span.css({'display': 'inline-block'});
    };

    // 保存改名
    function saveRename (span, div){
        var text = div.children('input').val();
        span.text(text);
        div.remove();
        span.css({'display': 'inline-block'});
    };

}();