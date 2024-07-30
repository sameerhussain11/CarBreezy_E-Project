$(document).ready(function () {
    var $window = $(window);

    function checkIfInView() {
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($('.section'), function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animate__fadeIn');
            } else {
                $element.removeClass('animate__fadeIn');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');

    // Modal
    var brandDetails = {
        ferrari: {
            title: "Brand Name: Ferrari",
            description: "Ferrari, founded by Enzo Ferrari in 1939, is an Italian luxury sports car manufacturer based in Maranello, Italy. Known for its powerful V12 engines, Ferrari has been a symbol of speed, luxury, and wealth. The brand has a rich history in motorsports, particularly in Formula One, where it has achieved great success. Ferrari cars are renowned for their distinctive style, cutting-edge technology, and superior performance.",
            file: "docs/ferrari.docx"
        },
        lamborghini: {
            title: "Brand Name: Lamborghini",
            description: "Automobili Lamborghini S.p.A. was founded in 1963 by Ferruccio Lamborghini, with the goal of producing a refined grand touring car to compete with established marques like Ferrari. Lamborghini's cars are known for their aggressive styling, powerful engines, and high performance. The company has a history of creating iconic models such as the Miura, Countach, and Aventador. Lamborghini continues to innovate with new models that push the boundaries of design and performance.",
            file: "docs/lambo.docx"
        },
        porsche: {
            title: "Brand Name: Porsche",
            description: "Porsche AG, founded in 1931 by Ferdinand Porsche, is a German automobile manufacturer specializing in high-performance sports cars, SUVs, and sedans. The brand is famous for its iconic 911 model, which has become a symbol of engineering excellence and driving pleasure. Porsche is known for its involvement in motorsport, particularly endurance racing, and has a reputation for producing cars that offer a perfect blend of performance, luxury, and practicality.",
            file: "docs/porsche.docx"
        },
        audi: {
            title: "Brand Name: Audi",
            description: "Audi AG, a subsidiary of the Volkswagen Group, was founded in 1909 by August Horch. Audi is headquartered in Ingolstadt, Germany, and is known for its luxurious and technologically advanced vehicles. The brand's slogan, 'Vorsprung durch Technik' (Advancement through Technology), reflects its commitment to innovation. Audi produces a wide range of vehicles, from compact cars to high-performance sports models, and is recognized for its Quattro all-wheel-drive system and elegant design.",
            file: "docs/audi.docx"
        },
        bmw: {
            title: "Brand Name: BMW",
            description: "Bayerische Motoren Werke AG (BMW) was founded in 1916 and is headquartered in Munich, Germany. BMW is renowned for its premium vehicles that combine performance, luxury, and cutting-edge technology. The brand's slogan, 'The Ultimate Driving Machine,' emphasizes its focus on driving dynamics and engineering excellence. BMW offers a diverse lineup, including sedans, SUVs, and sports cars, and is also known for its contributions to motorsport and its commitment to sustainability through electric and hybrid models.",
            file: "docs/bmw.docx"
        },
        mercedes: {
            title: "Brand Name: Mercedes-Benz",
            description: "Mercedes-Benz, founded in 1926, is a division of the German company Daimler AG. The brand is synonymous with luxury, innovation, and quality. Mercedes-Benz produces a wide range of vehicles, including luxury sedans, SUVs, coupes, and convertibles. The company's commitment to engineering excellence and cutting-edge technology is evident in its numerous innovations, such as the introduction of the first production car with a diesel engine and the development of advanced safety systems. Mercedes-Benz has a rich heritage in motorsport and continues to lead in automotive innovation.",
            file: "docs/mercedes.docx"
        }
    };

    // Modal functionality
    $('.learn-more-btn').on('click', function () {
        var brand = $(this).data('brand');
        var details = brandDetails[brand];

        $('#modalTitle').text(details.title);
        $('#modalDescription').text(details.description);
        $('#downloadLink').attr('href', details.file);

        $('#modal').fadeIn();
    });

    $('.close-btn').on('click', function () {
        $('#modal').fadeOut();
    });

    $(window).on('click', function (event) {
        if ($(event.target).is('#modal')) {
            $('#modal').fadeOut();
        }
    });
});
