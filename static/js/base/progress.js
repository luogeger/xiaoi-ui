//  进度条
//  ==================================================
+function () {
    // fa fa-check-circle
    var step = 0.2;
    var timer = setInterval(function () {
        var width;
        step += 0.1;
        progress(step)

        if (step >= 59.6) {
            clearInterval(timer)
        }

        function progress (step) {
            $('#iProBar').css('width', step +'%')
            $('#iProNum').text(step.toFixed(1))
        }
    }, 100);
}();