// Variables and data
let country_list = ['APO/FPO (US)', 'Australia', 'Austria','Belgium','Bulgaria', 'Canada','China','Cyprus', 'Czech Republic','Denmark', 'Estonia','Finland','France', 'Germany', 'Greece']
let selectElem = document.getElementById("shipping-country");

//Executing functions
$(document).ready(function () {    
    makeSelect(country_list, selectElem); 
    Menu();

});

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