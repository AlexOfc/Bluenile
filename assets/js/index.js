// Variables and data
let country_list = ['APO/FPO (US)', 'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'China', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece']
let selectElem = document.getElementById("shipping-country");
let cutArray = ['Good', 'Very Good', 'Ideal', 'Astor Ideal'];
let colorArray = ['J', 'I', 'H', 'G', 'F', 'E', 'D'];
let clarityArray = ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL',]
let shapesNames = ['Silicon', 'Fused Silica', 'Borofloat /Pyrex', 'Germanium', 'Gallium Arsenide', 'Intrinsic', 'Sapphire', 'InP', 'GaP', 'GaN', 'Thin Silicon', 'Thermal Oxide', 'Thermal Oxide', 'Nitride On Silicon', 'Silicon Carbide Wafers', 'ZnSe', 'Diced Silicon', 'GaN on Sapphire', 'Silicon on Insulator (SOI) wafers', 'Glass Wafers', 'CaF2', 'GaSb', 'YSZ', 'Soda Lime', 'BK7 Glass', 'D263 Glass', 'Soda lime Glass', 'Gorilla Glass', 'Borofloat 33 Glass', 'InAs', 'SI on Sapphire', 'ZnO', 'InSb', 'Solar', 'Single Crystal Quartz', 'Corning Eagle Glass', 'Polysilicon', 'Graphene', 'ITO glass', 'Free Standing GaN', 'InGaAs EPI on InP', 'MgF2', 'Aluminum', 'Undoped/Intrinsic Silicon', 'LiNbO3', 'Silicon EPI', 'LiTaO3', 'AlGaN/GaN-on-Sapphire']

let shapeData = [
    {
        name: 'Round',
        prefix: 'RD'
    },
    {
        name: 'Princess',
        prefix: 'PR'
    },
    {
        name: 'Emerald',
        prefix: 'EC'
    },
    {
        name: 'Asscher',
        prefix: 'AS'
    },
    {
        name: 'Cushion',
        prefix: 'CU'
    },
    {
        name: 'Marquise',
        prefix: 'MQ'
    },
    {
        name: 'Radiant',
        prefix: 'RA'
    },
    {
        name: 'Oval',
        prefix: 'OV'
    },
    {
        name: 'Pear',
        prefix: 'PS'
    },
    {
        name: 'Heart',
        prefix: 'HS'
    }
]
//Executing functions
$(document).ready(function () {
    makeSelect(country_list, selectElem);
    Menu(shapesNames);
    CreateShapeFilter(shapeData);
    CreateSlider($('.price-filter'), 0, 1000, '$');
    CreateSlider($('.carat-filter'), 0, 1000, '');
    CreateTickedSlider($('.cut-filter'), 0, 4, cutArray);
    CreateTickedSlider($('.color-filter'), 0, 7, colorArray);
    CreateTickedSlider($('.clarity-filter'), 0, 8, clarityArray);
});
function CreateShapeFilter(array) {
    $.each(array, function (i, val) {
        $('.shape-cont').append(`
            <div class="shape-filter-button">
            <div class="shape-filter-label-container">
                <div class="bn-checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox">
                        <label for="has-visualization-filter" class="new-checkbox"></label>
                    </div>
                </div>
            </div>
            <div class="shape-filter-button-label">`+ val.name + `</div>
            <div class="shape-filter-button-inner">
                <div class="shape-filter-icon diamond-search-sprite `+ val.prefix + `"></div>
                <div class="small-shape-filter-icon diamond-search-sprite `+ val.prefix + `"></div>
            </div>
        </div>
        `);
    });
}
function CreateSlider(element, minimum, maximum, txt) {
    $(element).find('.slider').slider({
        range: true,
        min: minimum,
        max: maximum,
        values: [minimum, maximum],
        slide: function (event, ui) {
            $(element).find('.minValue').val(txt + ui.values[0]);
            $(element).find('.maxValue').val(txt + ui.values[1]);
            $(element).find('.range').text('(' + txt + ui.values[0] + ' - ' + txt + ui.values[1] + ')')
        }
    });
    $(element).find('.minValue').val(txt + $(element).find('.slider').slider("values", 0));
    $(element).find('.maxValue').val(txt + $(element).find('.slider').slider("values", 1));
    $(element).find('.range').text('(' + txt + $(element).find('.slider').slider("values", 0) + ' - ' + txt + $(element).find('.slider').slider("values", 1) + ')')
}
function CreateTickedSlider(element, minimum, maximum, array) {
    $.each(array, function (i, e) {
        $(element).find('.slider-values').append('<div class="slider-value" data-count="' + i + '">' + e + '</div>');
    });

    $(element).find('.slider-value').css({
        'flex': '0 0 ' + 100 / $(element).find('.slider-values').children().length + '%',
        'max-width': 100 / $(element).find('.slider-values').children().length + '%'
    })
    $(element).find('.slider').slider({
        range: true,
        min: minimum,
        max: maximum,
        step: 1,
        values: [minimum, maximum],
        slide: function (event, ui) {
            if (ui.values[1] - ui.values[0] < 1) {
                return false;
            } else {
                $(element).find('.slider-value').each(function (i, el) {
                    if ($(el).attr('data-count') < ui.values[0] || $(el).attr('data-count') >= ui.values[1]) {
                        $(el).addClass('unselected')
                    } else {
                        $(el).removeClass('unselected')
                    }
                });
            }
        }
    });
    for (i = 1; i < $(element).find('.slider-value').length; i++) {

        $(element).find('.slider').append('<div class="option-mark"></div>')
    }
    $(element).find('.option-mark').each(function (i, e) {
        $(e).css('left', (100 / Number($(element).find('.option-mark').length + 1)) * Number(i + 1) + '%')
    })

    $(element).find('.slider-value').each(function (i, el) {
        if ($(el).attr('data-count') < $(element).find('.slider').slider("values", 0) || $(el).attr('data-count') >= $(element).find('.slider').slider("values", 1)) {
            $(el).addClass('unselected')
        }
    });

}
function makeSelect(array, element) {
    let option;
    array.forEach(function (el, i) {
        option = document.createElement("option");
        option.text = el;
        if (option.text == "Australia") option.selected = true;
        element.appendChild(option);
    });
}
function Menu(array) {
    "use strict";
    function c(e) {
        var t = $(e).position().left
            , n = $(e).find(".link-text").position().left + t
            , a = $(e).find(".link-text").width()
            , r = $(".navigation-bar").width()
            , c = $(e).find(".mega-content").outerHeight()
            , i = r - $(e).find(".mega-drop-down").width() - t;
        $(e).find(".mega-drop-down").addClass("active").css("height", c),
            e.nextElementSibling ? e.previousElementSibling && e.previousElementSibling.hasAttribute("data-segment") || (i += 1) : i -= 1,
            $("#navigation-menu").addClass("mega"),
            i < 0 && $(e).find(".mega-drop-down").css("left", i / 2)
    }
    function i(e) {
        $(".mega-drop-down").removeClass("active"),
            $("#navigation-menu").removeClass("mega")
    }
    function l() {
        $("#navigation-menu").find(".active").removeClass("active"),
            $(".selected-segment").length
    }
    function addColumn() {
        $('.menu-table .column').first().addClass('first');
        $('.menu-table .column').last().addClass('last');
        $('.menu-table .column li').each(function (i, elem) {
            if ($(elem).children('ul').length > 0) {
                $(elem).addClass('two-column-component')
            }
        });

    }
    for(i=1; i<= array.length; i++) {
        console.log(i)
        if (i == 1) {
            $('.menu-table').append('<div class="column"><ul></ul></div>');
        } else if (i % 16 === 0) {
            $('.menu-table').append('<div class="column"><ul></ul></div>');
        } else {
            $('.menu-table .column').last().append('<li><a href="javascript:void(0)">'+array[i-1]+'</a></li>')
        }
        if (i == array.length) {
            $('.menu-table .column').last().remove()
        }
    }
    addColumn();
    $(".selected-segment").length && $("#navigation-menu").addClass("selected-segment-active"),
        $("#navigation-menu").length && (Modernizr.touch ? ($(".touch-header-link").removeClass("hidden"),
            $(".segment").on("click", function (e) {
                $(this).find(".mega-drop-down").length && ($(this).find(".mega-drop-down").hasClass("active") ? (($(e.target).hasClass("link-text") || $(e.target).hasClass("label")) && e.preventDefault(),
                    i(this),
                    l()) : (e.preventDefault(),
                        l(),
                        $(this).addClass("active"),
                        c(this)))
            })) : ($(".segment").on("mouseover", function () {
                c(this)
            }), $(".segment").on("mouseleave", function () {
                    i(this)
                })
            ))

}