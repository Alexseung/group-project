
document.addEventListener('DOMContentLoaded', function() {
    /**
     * mobile버튼 공통
     */
    var button = document.querySelector('.mobile_btn');
    var menu = document.querySelector('.gnb_wrap');

    button.addEventListener('click', function() {
        if (window.getComputedStyle(menu).display === 'none') {
            menu.style.display = 'flex';
            var height = menu.scrollHeight + 'px';
            menu.style.maxHeight = '0';
            button.classList.add('on');
            setTimeout(function() {
                menu.style.maxHeight = height;
            }, 10);
        } else {
            menu.style.maxHeight = '0';
            menu.addEventListener('transitionend', function() {
                if (menu.style.maxHeight === '0px') {
                    menu.style.display = 'none';
                }
            }, { once: true });
            button.classList.remove('on');
            menu.removeAttribute('style');
        }
    });


});

(function($) {
    'use strict';


	$(function() {

		var $window = $(window),
				$scrollcontent = $('.scroll_content');

		$scrollcontent.each(function(){
			var $this = $(this),
					scrollTop = $window.scrollTop(),
					scrollBottom = scrollTop + $window.height(),
					contentOffset = $this.offset();
			if(scrollBottom > contentOffset.top) {
				$this.addClass('active');
			};
		});

		$window.on('scroll', function(event) {

			$scrollcontent.each(function(){
				var $this = $(this),
						scrollTop = $window.scrollTop(),
						scrollBottom = scrollTop + $window.height(),
						contentOffset = $this.offset();
				if(scrollBottom > contentOffset.top) {
					$this.addClass('active');
				}else{
					$this.removeClass('active');
				};
			});

		});

	});

})(window.jQuery);