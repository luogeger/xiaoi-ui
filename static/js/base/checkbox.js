//  多选框
//  ==================================================
+function () {
    $('body').on('click', '.i-checkbox-item', function (e) {
        var _this = $(this)
        var classStr = 'i-checkbox-checked';
        if (_this.hasClass(classStr)) {
            _this.removeClass(classStr)
            return;
        }
        _this.addClass(classStr)
    })
}();