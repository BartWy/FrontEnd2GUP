$(document).ready(function () {
    var $loginLink = $('.loginLink');
    var $loginBox = $('.loginBox');
    var $handleLoginBtn = $('.handleLogin');
    var $counter = $('.counter');
    $counter.html(0);
    $loginLink.on('click', function (e) {
        e.preventDefault();
        $loginLink.addClass('d-none');
        $loginBox.removeClass('d-none');
    });

    var pizza = [
        {
            id: 1,
            name: 'Margarita',
            points: 1,
            image: 'margarita.png',
            costs: 0
        }
];

    $handleLoginBtn.on('click', function (e) {
        alert('Zalogowano');
        $loginLink.removeClass('d-none');
        $loginBox.addClass('d-none');
    });
    $('<img/>', {
            class: 'pizza'
        })
        .attr('src', './images/margarita.png')
        .appendTo('.pizza-container');

    var $pizza = $('.pizza');

    $pizza.on('mouseover', function (e) {
        $pizza.attr('height', 0.9 * $pizza.height());

    });

    $pizza.on('mouseleave', function (e) {
        $pizza.attr('height', 1.11 * $pizza.height());
    });




    var count = 0;
    $('.pizza').on('click', function () {

        //alert("Kliknąłes w pizzę!");
        count += pizza[0].points;
        $(".counter").html(count);

    });
    var boosters = [
        {
            id: 1,
            name: 'Włoska czapka kucharska',
            points: 10,
            per: 1000,
            image: 'chat.jpg',
            value: 2
        },
        {
            id: 2,
            name: 'Włoska łopatka kucharska',
            points: 19,
            per: 1000,
            image: 'pot.jpg',
            value: 3
        },

        {
            id: 3,
            name: 'Włoski sos do pizzy',
            points: 19,
            per: 1000,
            image: 'sos.jpg',
            value: 1
        },
        {
            id: 4,
            name: 'Włoski fartuch kucharski',
            points: 13,
            per: 1000,
            image: 'apron.jpg',
            value: 4
        },
        {
            id: 5,
            name: 'Włoski widelec do pizzy ',
            points: 10,
            per: 1000,
            image: 'fork.jpg',
            value: 5
        }

];
    $('<ul/>', {
        class: 'boosters list-group'
    }).appendTo('.boostList');

    for (var b of boosters) {
        $('<li/>', {
                id: 'b_' + b.id,
                class: 'list-group-item'
            })
            .css('background-image', 'url(images/' + b.image + ')')
            .addClass('boostItem')
            .html(b.name)
            .appendTo('.boosters');
    }

    $('ul.boosters > li').on('click', function (e) {

        var elementId = $(this).attr('id');
        var id = parseInt(elementId.replace('b_', ''));
        var currentB;

        for (var b of boosters) {
            if (b.id == id) {
                currentB = b;
                break;
            }
        }
        //alert(currentB.id);
        var userPoints = parseInt($counter.html());
        if (userPoints > currentB.points) {
            userPoints -= currentB.points;
            $counter.html(userPoints)
            setInterval(function () {
                var points = parseInt($counter.html());
                points += currentB.value;
                $counter.html(points);
            }, currentB.per);
        }
    });
});
