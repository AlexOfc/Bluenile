// Variables and data
let country_list = ['APO/FPO (US)', 'Australia', 'Austria','Belgium','Bulgaria', 'Canada','China','Cyprus', 'Czech Republic','Denmark', 'Estonia','Finland','France', 'Germany', 'Greece']
let selectElem = document.getElementById("shipping-country");
let cutArray = ['Good', 'Very Good', 'Ideal', 'Astor Ideal'];
let colorArray = ['J', 'I', 'H', 'G', 'F', 'E', 'D'];
let clarityArray = ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL',]

//Executing functions
$(document).ready(function () {    
    makeSelect(country_list, selectElem); 
    Menu();
    CreateSlider($('.price-filter'), 0, 1000, '$');
    CreateSlider($('.carat-filter'), 0, 1000, '');
    CreateTickedSlider($('.cut-filter'), 0, 4, cutArray);
    CreateTickedSlider($('.color-filter'), 0, 7, colorArray);
    CreateTickedSlider($('.clarity-filter'), 0, 8, clarityArray);
});
function CreateSlider (element, minimum, maximum, txt) {
    $(element).find('.slider').slider({
        range:true,
        min: minimum,
        max: maximum,
        values: [minimum, maximum],
        slide: function( event, ui ) {
            $(element).find('.minValue').val(txt + ui.values[ 0 ]);
            $(element).find('.maxValue').val(txt + ui.values[ 1 ]);
            $(element).find('.range').text('(' + txt + ui.values[ 0 ] + ' - ' + txt + ui.values[ 1 ] + ')')
          }
    });
            $(element).find('.minValue').val(txt + $(element).find('.slider').slider( "values", 0 ));
            $(element).find('.maxValue').val(txt + $(element).find('.slider').slider( "values", 1 ));
            $(element).find('.range').text('(' + txt + $(element).find('.slider').slider( "values", 0 ) + ' - ' + txt + $(element).find('.slider').slider( "values", 1 ) + ')')
}
function CreateTickedSlider (element, minimum, maximum, array) {
    $.each(array, function(i, e){
        $(element).find('.slider-values').append('<div class="slider-value" data-count="'+i+'">'+e+'</div>');        
    });
    
    $(element).find('.slider-value').css({
        'flex': '0 0 '+100/$(element).find('.slider-values').children().length+'%',
        'max-width': 100/$(element).find('.slider-values').children().length+'%'
    })
    $(element).find('.slider').slider({
        range:true,
        min: minimum,
        max: maximum,
        step: 1,
        values: [minimum, maximum],
        slide: function( event, ui ) {
            if(ui.values[1] - ui.values[0] < 1){
                return false;
            } else {
                $(element).find('.slider-value').each(function(i, el){
                    if ($(el).attr('data-count') < ui.values[ 0 ] || $(el).attr('data-count') >= ui.values[ 1 ]) {
                        $(el).addClass('unselected')
                    } else {
                        $(el).removeClass('unselected')
                    }
                });
            }            
        }
    });
    for (i = 1; i < $(element).find('.slider-value').length; i++) {
        console.log(i)
        $(element).find('.slider').append('<div class="option-mark"></div>')
    }
    $(element).find('.option-mark').each(function(i, e) {
        $(e).css('left', (100/Number( $(element).find('.option-mark').length + 1 ))*Number(i+1)+'%')
    })
    
    $(element).find('.slider-value').each(function(i, el){
        console.log($(el).attr('data-count') ,$(element).find('.slider').slider( "values", 0 ))
        if ($(el).attr('data-count') < $(element).find('.slider').slider( "values", 0 ) || $(el).attr('data-count') >= $(element).find('.slider').slider( "values", 1 )) {
            $(el).addClass('unselected')
        }
    });
        
}
function makeSelect (array, element) {
    let option;
    array.forEach(function(el, i) {
        option = document.createElement("option");
        option.text = el;
        if (option.text == "Australia") option.selected = true;
        element.appendChild(option);
    });
}
function Menu () {
    "use strict";
    function r() {
        if ($(".selected-segment").length) {
            var e = $(".selected-segment").position().left
              , t = $(".selected-segment").find(".link-text").position().left + e
              , n = $(".selected-segment").find(".link-text").width();
            $(".blue-bar").css("left", t).css("width", n)
        }
    }
    function c(e) {
        var t = $(e).position().left
          , n = $(e).find(".link-text").position().left + t
          , a = $(e).find(".link-text").width()
          , r = $(".navigation-bar").width()
          , c = $(e).find(".mega-content").outerHeight()
          , i = r - $(e).find(".mega-drop-down").width() - t;
        $(e).find(".mega-drop-down").addClass("active").css("height", c),
        e.nextElementSibling ? e.previousElementSibling && e.previousElementSibling.hasAttribute("data-segment") || (i += 1) : i -= 1,
        $(".blue-bar").css("left", n).css("width", a),
        $("#navigation-menu").addClass("mega"),
        i < 0 && $(e).find(".mega-drop-down").css("left", i)
    }
    function i(e) {
        $(e).find(".mega-drop-down").removeClass("active"),
        $("#navigation-menu").removeClass("mega"),
        r()
    }
    function s() {
        $(".blue-bar").css("left", "").css("width", "")
    }
    function l() {
        $("#navigation-menu").find(".active").removeClass("active"),
        $(".selected-segment").length || s()
    }
    function addColumn() {
        $('.menu-table .column').first().addClass('first');
        $('.menu-table .column').last().addClass('last');
        $('.menu-table .column li').each(function(i, elem){
            if ($(elem).children('ul').length > 0) {
                $(elem).addClass('two-column-component')
            }
        });
        
    }
    $(window).on('load', function() {
        addColumn();
        $(".selected-segment").length && $("#navigation-menu").addClass("selected-segment-active"),
        r(),
        $("#navigation-menu").length && (Modernizr.touch ? ($(".touch-header-link").removeClass("hidden"),
        $(".segment").on("click", function(e) {
            $(this).find(".mega-drop-down").length && ($(this).find(".mega-drop-down").hasClass("active") ? (($(e.target).hasClass("link-text") || $(e.target).hasClass("label")) && e.preventDefault(),
            i(this),
            l()) : (e.preventDefault(),
            l(),
            $(this).addClass("active"),
            c(this)))
        })) : ($(".segment").on("mouseover", function() {
            c(this)
        }),
        $(".segment").on("mouseleave", function() {
            i(this)
        }),
        $("#navigation-menu:not(.selected-segment-active)").on("mouseleave", function() {
            s()
        })))
    })
}