
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

        //ajax
        $(document).ready(function(){
            $.ajax({
                url: './event/index.html',
                method: 'GET',
                success: function(data) {
                    var $html = $(data);
                    var cards = $html.find('.card');
                    var eventList = $('.eventList');
                    eventList.empty(); // .eventList 내용을 비웁니다.
        
                    cards.each(function(index) {
                        var cardElement = $(this).clone();
                        var imgElement = cardElement.find('img');
                        var src = imgElement.attr('src');
                        imgElement.attr('src', src.replace('./images/', './event/images/'));
        
                        // .eventItem 요소를 생성하고 .card 요소를 추가합니다.
                        var eventItem = $('<div class="eventItem"></div>').append(cardElement);
                        eventList.append(eventItem);
                    });

                    eventList.slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        dots: true,
                        arrows: true,
                    });
                },
                error: function(error) {
                    console.log('Error fetching the cards:', error);
                }
            });
        });
        
	});

})(window.jQuery);
