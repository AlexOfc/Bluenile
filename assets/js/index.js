// Variables and data
let country_list = ['APO/FPO (US)', 'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'China', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece'],
    selectElem = document.getElementById("shipping-country"),
    dopantArray = ['ANY', 'As', 'B', 'Ga', 'Intrinsic', 'N/A', 'Nitrogen', 'P', 'S', 'Sb', 'Si', 'Te', 'Undoped', 'Zn', 'N', 'Fe', 'Mg'],
    typeArray = ['P', 'N', 'ANY', 'Undoped'],
    orientationArray = ['<0001>', '<100>', '<110>', '<111>', 'ANY', 'N/A', '<510>', '<112>', '<113>', '<557>', '<111B>', '<111A>', '<1-102>', 'ST-cut', 'X-cut', 'Y-cut', 'Y-X-cut', 'Z-cut', 'AT-cut', '<11-20>', '<111-4°>', '<111-3°>'],
    shapesNames = ['Silicon', 'Fused Silica', 'Borofloat /Pyrex', 'Germanium', 'Gallium Arsenide', 'Intrinsic', 'Sapphire', 'InP', 'GaP', 'GaN', 'Thin Silicon', 'Thermal Oxide', 'Thermal Oxide', 'Nitride On Silicon', 'Silicon Carbide Wafers', 'ZnSe', 'Diced Silicon', 'GaN on Sapphire', 'Silicon on Insulator (SOI) wafers', 'Glass Wafers', 'CaF2', 'GaSb', 'YSZ', 'Soda Lime', 'BK7 Glass', 'D263 Glass', 'Soda lime Glass', 'Gorilla Glass', 'Borofloat 33 Glass', 'InAs', 'SI on Sapphire', 'ZnO', 'InSb', 'Solar', 'Single Crystal Quartz', 'Corning Eagle Glass', 'Polysilicon', 'Graphene', 'ITO glass', 'Free Standing GaN', 'InGaAs EPI on InP', 'MgF2', 'Aluminum', 'Undoped/Intrinsic Silicon', 'LiNbO3', 'Silicon EPI', 'LiTaO3', 'AlGaN/GaN-on-Sapphire'],
    diametersNames = ['0.5mm', '100mm', '10mm', '123', '125mm', '125x125mm', '150mm', '200mm', '25.4mm', '25mm', '300mm', '450mm', '48mm', '5.5mm', '50.8mm', '5mm', '76.2mm', 'rect', 'Square', '25mm X 25mm', '156 x 156 mm', 'Unknown', 'Pr-A', 'Pr A', 'testtt', '10.0mm×10.5mm', 'Rectangle', '20mm', '15mm', '50mm', '12.7mm', '15mmX15mm', '20mmX20mm', '100x100mm', '10mmX10mm', '5mmX5mm', '34mm', 'Broken'],
    gradeArray = ['Test', 'Prime', 'MECH', 'SEMI Prime', 'Solar Wafers', 'SAW', 'Optical', 'EPI/MECH', 'Dummy', 'Bad Quality'],
    resgradeArray = [0, 0.5, 0.01, 75, 0.015, 0.005, 5, 3, 2, 0.035];
    polishArray = ['DSP', 'E/E', 'HI REF', 'L/L', 'SSP', 'C/C', 'SSP;PSS'],
    thicknessNames = ['320-350', '280  um', '300-350um', '525 um', '485 - 535 um', '850-900um', '650um', 'N/A', '280', '0.5+/- 0.03mm', 'Not legible', '10um?', '500um (?)', 'Illegible', 'STD'],
    diameterData = ['0.5mm', '100mm', '10mm', '123', '125mm', '125x125mm', '150mm', '200mm', '25.4mm', '25mm', '300mm', '450mm', '48mm', '5.5mm', '50.8mm', '5mm', '76.2mm', 'rect', 'Square', '25mm X 25mm', '156 x 156 mm', 'Unknown', 'Pr-A', 'Pr A', 'testtt', '10.0mm×10.5mm', 'Rectangle', '20mm', '15mm', '50mm', '12.7mm', '15mmX15mm', '20mmX20mm', '100x100mm', '10mmX10mm', '5mmX5mm', '34mm', 'Broken'],
    itemsData = [
        {
            id: 1,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            res: '>50',
            thick: '100$',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '100$',
            twfive_unit_price: '100$',
            fifty_unit_price: '100$',
            hand_unit_price: '100$',
            twohand_unit_price: '100$',
            fivehand_unit_price: '100$',
            description: 'P type ( Gallium doped)'
        },
        {
            id: 2,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            res: '>50',
            thick: '100$',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '100$',
            twfive_unit_price: '100$',
            fifty_unit_price: '100$',
            hand_unit_price: '100$',
            twohand_unit_price: '100$',
            fivehand_unit_price: '100$',
            description: 'P type ( Gallium doped)'
        },
        {
            id: 3,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            res: '>50',
            thick: '100$',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '100$',
            twfive_unit_price: '100$',
            fifty_unit_price: '100$',
            hand_unit_price: '100$',
            twohand_unit_price: '100$',
            fivehand_unit_price: '100$',
            description: 'P type ( Gallium doped)'
        },
        {
            id: 4,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            res: '>50',
            thick: '100$',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '100$',
            twfive_unit_price: '100$',
            fifty_unit_price: '100$',
            hand_unit_price: '100$',
            twohand_unit_price: '100$',
            fivehand_unit_price: '100$',
            description: 'P type ( Gallium doped)'
        },
        {
            id: 1156,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            res: '>50',
            thick: '100$',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '100$',
            twfive_unit_price: '100$',
            fifty_unit_price: '100$',
            hand_unit_price: '100$',
            twohand_unit_price: '100$',
            fivehand_unit_price: '100$',
            description: 'P type ( Gallium doped)'
        },
        {
            id: 2482,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            res: '>50',
            thick: '100$',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '100$',
            twfive_unit_price: '100$',
            fifty_unit_price: '100$',
            hand_unit_price: '100$',
            twohand_unit_price: '100$',
            fivehand_unit_price: '100$',
            description: 'P type ( Gallium doped)'
        }
    ]
/*let shapeData = [
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
]*/
//Executing functions
$(document).ready(function () {
    makeSelect(country_list, selectElem);
    Menu(shapesNames);
    //CreateShapeFilter(shapeData);
    CreateSlider($('.res-filter'), 0, 75, '');
    CreateDropdownFilter($('.shape-filter'), diameterData);
    CreateTickedSlider($('.cut-filter'), 0, dopantArray);
    CreateTickedSlider($('.grade-filter'), 0, gradeArray);
    CreateTickedSlider($('.polish-filter'), 0, polishArray);
    CreateDropdownFilter($('.thickness-filter'), thicknessNames);
    CreateTickedSlider($('.type-filter'), 0, typeArray);
    CreateTickedSlider($('.orientation-filter'), 0, orientationArray);
    CreateItems(itemsData)
    hideFilters()
    keyUpFunctions ();
    clickFunctions()
});
/*function CreateShapeFilter(array) {
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
}*/
function CreateItems (object) {
    $.each(object, function(i, e){
        var count = i;
        $('.body-goods').append(`
        <div class="body-item body_item_`+i+`">
            <div class="body-good qty-des">
                <select name="qty"></select>
                <a href="javascript:void(0)" class="add-to-cart"><i class="fa fa-cart-arrow-down"></i></a>
            </div>
            <div class="body-good">
                 `+e.id+`
            </div>
            <div class="body-good">
                 `+e.diameter+`
            </div>
            <div class="body-good">
                 `+e.type+`
            </div>
            <div class="body-good">
                 `+e.dopant+`
            </div>
            <div class="body-good">
                 `+e.orien+`
            </div>
            <div class="body-good">
                 `+e.res+`
            </div>
            <div class="body-good">
                 `+e.thick+`
            </div>
            <div class="body-good">
                 `+e.leadTime+`
            </div>
            <div class="body-good">
                 `+e.quantity+`
            </div>
            <div class="body-good">
             `+e.one_unit_price+`
            </div>
            <div class="body-good">
             `+e.five_unit_price+`
            </div>
            <div class="body-good">
                 `+e.ten_unit_price+`
            </div>
            <div class="body-good">
                `+e.twfive_unit_price+`
            </div>
            <div class="body-good">
             `+e.fifty_unit_price+`
            </div>
            <div class="body-good">
             `+e.hand_unit_price+`
            </div>
            <div class="body-good">
                 `+e.twohand_unit_price+`
            </div>
            <div class="body-good">
                 `+e.fivehand_unit_price+`
            </div>
            <div class="body-good">
             `+e.description+`
            </div>
        </div>
        `);
        $.each(e.qty, function(key, val) {
            $('.body_item_'+count).find('select').append('<option value="'+val+'">'+val+'</option>')
        });
    });
}
function CreateSlider(element, minimum, maximum, txt) {
    $(element).find('.slider').slider({
        range: true,
        min: minimum,
        max: maximum,
        values: [minimum, maximum],
        step: 0.005,
        slide: function (event, ui) {
            $(element).find('.minValue').val(txt + ui.values[0]);
            $(element).find('.maxValue').val(txt + ui.values[1]);
            $(element).find('.range').text('(' + txt + ui.values[0] + ' - ' + txt + ui.values[1] + ')');
            if ($(element).hasClass('filter-toggling')) {
                $(element).addClass('toggled');
                 $(element).find('.toggle-button-space').addClass('toggled')
            }
        }
    });
    $(element).find('.minValue').val(txt + $(element).find('.slider').slider("values", 0));
    $(element).find('.maxValue').val(txt + $(element).find('.slider').slider("values", 1));
    $(element).find('.range').text('(' + txt + $(element).find('.slider').slider("values", 0) + ' - ' + txt + $(element).find('.slider').slider("values", 1) + ')')
}
function CreateDropdownFilter(element, array) {
    $.each(array, function (i, e) {
        $(element).find('.dropdown-selector').append('<option value="'+ e + '">' + e + '</div>');
    });

}
function CreateTickedSlider(element, minimum, array) {
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
        max: array.length,
        step: 1,
        values: [minimum, array.length],
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
                if ($(element).hasClass('filter-toggling')) {
                    $(element).addClass('toggled');
                     $(element).find('.toggle-button-space').addClass('toggled')
                }
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
function keyUpFunctions () {
    $(".minValue").change(function() {
        $(this).parent().next().slider('values',0,$(this).val());
    });
    $(".maxValue").change(function() {
        $(this).parent().next().slider('values',1,$(this).val());
    });
}
function sortTable(n, id) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(id);
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByClassName("body-item")[n];
        y = rows[i + 1].getElementsByClassName("body-item")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
function clickFunctions() {
    $('.slider-value').on('click', function(){
            $(this).parent().next().slider('values',0, $(this).attr('data-count'))
      
    });
    $('.all-filters span').on('click', function() {
        $('.filters-body').children('.filter-container:gt(2)').slideToggle(350);
        $(this).toggleClass('shown');
        if ($(this).hasClass('shown')) {
            $(this).html('Fewer filters <i class="fa fa-angle-up"></i>')
        } else {
            $(this).html('More filters <i class="fa fa-angle-down"></i>')
        }
    });
    $('.toggle-button-space').on('click', function(){
        $(this).toggleClass('toggled');
        $(this).parent().parent().parent().toggleClass('toggled')
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
function hideFilters() {
    $('.filters-body').children('.filter-container:gt(2)').hide();
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
                $(".mega-drop-down").removeClass("active"),
                $("#navigation-menu").removeClass("mega")
                })
            ))

}