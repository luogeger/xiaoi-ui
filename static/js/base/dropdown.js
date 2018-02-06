//  下拉框
//  ==================================================
+function () {
    var speed = 300;
    function paiTa (){
        $('.dropdown').each(function (index, item){
            $(item).children('ul').slideUp(speed)
            $(item).children('i').css({'transform':'rotate(0deg)'})
            $(item).removeClass('dropdown-shadow flag-open')
        })

    };

    $('body').on('click', '.dropdown', function (e){
        e.stopPropagation();
        var _this = $(this);
        var _ul = _this.children('ul');
        var _i = _this.children('i');
        var _li = _this.find('li');

        // 关闭
        if(_this.hasClass('flag-open')){
            _this.children('ul').slideUp(speed)
            _this.children('i').css({'transform':'rotate(0deg)'})
            _this.removeClass('dropdown-shadow flag-open')
            return;
        }

        // 打开
        paiTa ()
        _this.addClass('dropdown-shadow flag-open')
        _this.children('ul').slideDown(speed)
        _this.children('i').css({'transform':'rotate(180deg)'})

        // 点击选项
        _li.click(function (e){
            e.stopPropagation();
            _li.each(function (i, v){$(v).removeClass('li-checkbox')})// 排他

            $(this).addClass('li-checkbox')
            var option = $(this).text();
            _this.children('ul').slideUp(speed)
            _this.children('i').css({'transform':'rotate(0deg)'})
            _this.children('.dropdown-default').text(option)
            _this.removeClass('dropdown-shadow flag-open')
        })

    })

    $(document).click(function (){
        paiTa ()
    })
}();