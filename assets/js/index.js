
function clickFunctions() {
    $('.slider-value').on('click', function () {
        $(this).parent().next().slider('values', 0, $(this).attr('data-count'))

    });
    $('.all-filters span').on('click', function () {
        $('.filters-body').children('.filter-container:gt(2)').slideToggle(350);
        $(this).toggleClass('shown');
        if ($(this).hasClass('shown')) {
            $(this).html('Fewer filters <i class="fa fa-angle-up"></i>')
        } else {
            $(this).html('More filters <i class="fa fa-angle-down"></i>')
        }
    });
    $('.toggle-button-space').on('click', function () {
        $(this).toggleClass('toggled');
        $(this).parent().parent().parent().toggleClass('toggled');
        filterItems()
    });
    $('.actionbar-button').on('click', function() {
        $('#change-location-window').toggleClass('shown')
        $('.country-block').toggleClass('show')
    });
    $('.mobile-button-menu').on('click', function() {
        $(this).toggleClass('toggle');
        $('.extra-wide-layout, .mobile-menu-toggling').toggleClass('moving');
    });
    $('.open-mobile-cats').on('click', function(){
        $('.open-mobile-cats, #mobile-menu').toggleClass('opened')
    });

}
