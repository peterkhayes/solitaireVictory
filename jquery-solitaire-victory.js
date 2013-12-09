(function( $ ) {

    $.fn.solitaireVictory = function(settings) {

        settings = settings || {};

        var g = settings.g || -3;
        var dt = settings.dt || 20;
        var bounce = settings.bounce || 0.7;
        var endVelocity = settings.endVelocity || 20;
        var delay = settings.delay || 200;

        var body = $('body');
        var windowHeight = $(window).height();

        var fallIteration = function(elem, elemHeight, dx, dy) {
            var oldPos = $(elem).offset();
            var copy = $(elem).clone();
            body.append(copy);

            var newTop = Math.min(windowHeight - elemHeight, oldPos.top + dy);

            copy.offset({
                left: oldPos.left + dx,
                top: newTop
            });
            if (Math.abs(newTop - (windowHeight - elemHeight)) < 5) {
                if (dy < 0 || dy > endVelocity) {
                    dy *= -1*bounce;
                    setTimeout(function() {
                        fallIteration(copy, elemHeight, dx, dy);
                    }, dt);
                }
            } else {
                dy = dy - g;
                setTimeout(function() {
                    fallIteration(copy, elemHeight, dx, dy);
                }, dt);
            }
        };

        var startFall = function(elem, delay) {
            var dx = settings.dx || Math.floor((Math.random()*10)) + 5;
            var copy = elem.clone();
            copy.css('position', 'fixed');
            copy.offset({top: elem.offset().top});
            body.append(copy);
            setTimeout(function() {fallIteration(copy, copy.height(), dx, 0);}, delay);
        };

        this.each(function(index) {
            startFall($(this), index*delay);
        });
    };

}( jQuery ));