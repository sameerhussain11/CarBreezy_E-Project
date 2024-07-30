$(document).ready(function() {
    function handleScroll() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();

        $('.card').each(function() {
            const cardTop = $(this).offset().top;
            const cardHeight = $(this).outerHeight();

            if (scrollTop + windowHeight > cardTop && scrollTop < cardTop + cardHeight) {
                $(this).removeClass('scroll-down').addClass('scroll-up');
            } else {
                $(this).removeClass('scroll-up').addClass('scroll-down');
            }
        });
    }

    handleScroll();

    $(window).on('scroll', function() {
        handleScroll();
    });

    $('.card').on('click', function() {
        var images = $(this).data('images');
        var description = $(this).data('description');
        var rating = $(this).data('rating');
        var title = $(this).find('.card-title').text();
        var docUrl = $(this).data('doc');

        var carouselIndicators = $('#carouselIndicators');
        var carouselInner = $('#carouselInner');
        carouselIndicators.empty();
        carouselInner.empty();

        images.forEach(function(image, index) {
            var indicator = $('<li>').attr({
                'data-target': '#carouselExampleIndicators',
                'data-slide-to': index
            });
            var item = $('<div>').addClass('carousel-item').append(
                $('<img>').addClass('d-block w-100').attr('src', image)
            );
            if (index === 0) {
                indicator.addClass('active');
                item.addClass('active');
            }
            carouselIndicators.append(indicator);
            carouselInner.append(item);
        });

        $('#modalTitle').text(title);
        $('#modalDescription').text(description);
        $('#modalRating').text('Rating: ' + rating);
        $('#downloadDoc').attr('href', docUrl);
    });
});
