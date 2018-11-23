// letiables and data
let country_list = ['APO/FPO (US)', 'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'China', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece'],
    currencies_list = ['USD', 'RUB', 'EUR'],
    lang_list = ['English', 'Russian'],
    langElem = document.getElementById("lang-section"),
    currencyElem = document.getElementById("cur-section"),
    countryElem = document.getElementById("shipping-country"),
    dopantArray = ['--Please select dopant', 'ANY', 'As', 'B', 'Ga', 'Intrinsic', 'N/A', 'Nitrogen', 'P', 'S', 'Sb', 'Si', 'Te', 'Undoped', 'Zn', 'N', 'Fe', 'Mg'],
    typeArray = ['P', 'N', 'ANY', 'Undoped'],
    orientationArray = ['<0001>', '<100>', '<110>', '<111>', 'ANY', 'N/A', '<510>', '<112>', '<113>', '<557>', '<111B>', '<111A>', '<1-102>', 'ST-cut', 'X-cut', 'Y-cut', 'Y-X-cut', 'Z-cut', 'AT-cut', '<11-20>', '<111-4°>', '<111-3°>'],
    shapesNames = ['Silicon', 'Fused Silica', 'Borofloat /Pyrex', 'Germanium', 'Gallium Arsenide', 'Intrinsic', 'Sapphire', 'InP', 'GaP', 'GaN', 'Thin Silicon', 'Thermal Oxide', 'Thermal Oxide', 'Nitride On Silicon', 'Silicon Carbide Wafers', 'ZnSe', 'Diced Silicon', 'GaN on Sapphire', 'Silicon on Insulator (SOI) wafers', 'Glass Wafers', 'CaF2', 'GaSb', 'YSZ', 'Soda Lime', 'BK7 Glass', 'D263 Glass', 'Soda lime Glass', 'Gorilla Glass', 'Borofloat 33 Glass', 'InAs', 'SI on Sapphire', 'ZnO', 'InSb', 'Solar', 'Single Crystal Quartz', 'Corning Eagle Glass', 'Polysilicon', 'Graphene', 'ITO glass', 'Free Standing GaN', 'InGaAs EPI on InP', 'MgF2', 'Aluminum', 'Undoped/Intrinsic Silicon', 'LiNbO3', 'Silicon EPI', 'LiTaO3', 'AlGaN/GaN-on-Sapphire'],
    diametersNames = ['--Please select diameter', '0.5mm', '100mm', '10mm', '123', '125mm', '125x125mm', '150mm', '200mm', '25.4mm', '25mm', '300mm', '450mm', '48mm', '5.5mm', '50.8mm', '5mm', '76.2mm', 'rect', 'Square', '25mm X 25mm', '156 x 156 mm', 'Unknown', 'Pr-A', 'Pr A', 'testtt', '10.0mm×10.5mm', 'Rectangle', '20mm', '15mm', '50mm', '12.7mm', '15mmX15mm', '20mmX20mm', '100x100mm', '10mmX10mm', '5mmX5mm', '34mm', 'Broken'],
    gradeArray = ['Test', 'Prime', 'MECH', 'SEMI Prime', 'Solar Wafers', 'SAW', 'Optical', 'EPI/MECH', 'Dummy', 'Bad Quality'],
    resgradeArray = [0, 0.5, 0.01, 75, 0.015, 0.005, 5, 3, 2, 0.035],
    polishArray = ['DSP', 'E/E', 'HI REF', 'L/L', 'SSP', 'C/C', 'SSP;PSS'],
    thicknessNames = ['280', '320-350', '280  um', '300-350um', '525 um', '485 - 535 um', '850-900um', '650um', 'N/A', '0.5+/- 0.03mm', 'Not legible', '10um?', '500um (?)', 'Illegible', 'STD'],
    itemsData = [
        {
            id: 1,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            resMin: '10',
            resMax: '20',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            diameter: '400mm',
            type: 'P',
            dopant: 'S',
            orien: '<111>',
            resMin: '5',
            resMax: '30',
            resistivity: '25',
            thick: '280',
            grade: 'SAW',
            polish: 'E/E',
            leadTime: '3 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '1000$',
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
            diameter: '0.5mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'SAW',
            polish: 'E/E',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '800$',
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
            diameter: '0.5mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '300$',
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
            id: 1,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '>5000',
            resMax: '0',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            diameter: '400mm',
            type: 'P',
            dopant: 'S',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'SAW',
            polish: 'E/E',
            leadTime: '3 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '1000$',
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
            diameter: '0.5mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'SAW',
            polish: 'E/E',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '800$',
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
            diameter: '0.5mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '300$',
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
            id: 1,
            qty: [7, 15, 23, 42],
            diameter: '100mm',
            type: 'Undoped',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            type: 'P',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            type: 'N',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
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
            id: 40,
            qty: [7, 15, 23, 42],
            diameter: '400mm',
            type: 'P',
            dopant: 'S',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'SAW',
            polish: 'E/E',
            leadTime: '3 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '1000$',
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
            diameter: '0.5mm',
            type: 'N',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'SAW',
            polish: 'E/E',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '100$',
            five_unit_price: '100$',
            ten_unit_price: '800$',
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
            diameter: '0.5mm',
            type: 'ANY',
            dopant: 'Undoped',
            orien: '<111>',
            resMin: '1',
            resMax: '50',
            resistivity: '25',
            thick: '280',
            grade: 'MECH',
            polish: 'E/E',
            leadTime: '1 week',
            quantity: '25',
            one_unit_price: '300$',
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

//Executing functions
$(document).ready(function () {
    makeSelect(country_list, countryElem);
    makeSelect(currencies_list, currencyElem);
    makeSelect(lang_list, langElem);
    Menu(shapesNames);
    CreateSlider($('.res-filter'), 0, 75, '');
    CreateDropdownFilter($('.diameter-filter'), diametersNames);
    CreateDropdownFilter($('.dopant-filter'), dopantArray);
    CreateTickedSlider($('.grade-filter'), 0, gradeArray);
    CreateTickedSlider($('.polish-filter'), 0, polishArray);
    CreateDropdownFilter($('.thickness-filter'), thicknessNames);
    CreateTickedSlider($('.type-filter'), 0, typeArray);
    CreateTickedSlider($('.orientation-filter'), 0, orientationArray);
    CreateItems(itemsData, $('#all'));
    filterItems();
    let defaulDiameter = $('.diameter-filter').find('select').children('option:selected').val(),
        defaultType = [$('.type-filter').find('.slider').slider("values", 0), $('.type-filter').find('.slider').slider("values", 1)],
        defaultGrade = [$('.grade-filter').find('.slider').slider("values", 0), $('.grade-filter').find('.slider').slider("values", 1)],
        defaultPolish = [$('.polish-filter').find('.slider').slider("values", 0), $('.polish-filter').find('.slider').slider("values", 1)],
        defaultDopant = $('.dopant-filter').find('select').children('option:selected').val(),
        defaultOrientation = [$('.orientation-filter').find('.slider').slider("values", 0), $('.orientation-filter').find('.slider').slider("values", 1)],
        defaultResistivity = [$('.res-filter').find('.slider').slider("values", 0), $('.res-filter').find('.slider').slider("values", 1)],
        defaultThickness = $('.thickness-filter').find('select').children('option:selected').val();
    onchangeFunctions();
    hideFilters();
    keyUpFunctions();
    clickFunctions();
    
    // $('.heh').sort(function (a, b) {
    //     //console.log($(a))
    //     //console.log($(b))
    //     var contentA =parseInt( $(a).attr('data-sort'));
    //     var contentB =parseInt( $(b).attr('data-sort'));
    //     if (contentA < contentB) {

    //     }
    //     //console.log( (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0);
    //  });
    $('.reset-filters').on('click', function () {
        resetFilter(defaulDiameter, defaultType, defaultGrade, defaultPolish, defaultDopant, defaultOrientation, defaultResistivity, defaultThickness);
        filterItems()
    });
    $('#all_wrapper').addClass('tab-pane fade show active goods-table').attr('id', 'lall').attr('role', 'tabpanel').attr('aria-labelledby', 'all-tab');
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
function resetFilter(diameter, type, grade, polish, dopant, orientation, resistivity, thickness) {
    $('.res-filter').find('.slider').slider("values", 0, resistivity[0]);
    $('.res-filter').find('.slider').slider("values", 1, resistivity[1]);
    $('.thickness-filter').find('select').val(thickness);
    $('.dopant-filter').find('select').slider(dopant);
    $('.orientation-filter').find('.slider').slider("values", 0, orientation[0]);
    $('.orientation-filter').find('.slider').slider("values", 1, orientation[1]);
    $('.polish-filter').find('.slider').slider("values", 0, polish[0]);
    $('.polish-filter').find('.slider').slider("values", 1, polish[1]);
    $('.grade-filter').find('.slider').slider("values", 0, grade[0]);
    $('.grade-filter').find('.slider').slider("values", 1, grade[1]);
    $('.type-filter').find('.slider').slider("values", 0, type[0]);
    $('.type-filter').find('.slider').slider("values", 1, type[1]);
    $('.polish-filter, .grade-filter, .dopant-filter, .orientation-filter, .thickness-filter, .res-filter').removeClass('toggled');
    $('.polish-filter .toggle-button-space, .grade-filter .toggle-button-space, .dopant-filter .toggle-button-space, .orientation-filter .toggle-button-space, .thickness-filter .toggle-button-space, .res-filter .toggle-button-space').removeClass('toggled');
    $('.diameter-filter').find('select').val(diameter);
    let elements = [$('.res-filter'), $('.polish-filter'), $('.grade-filter'), $('.type-filter')];
    $.each(elements, function (i, element) {
        $(element).find('.slider-value').each(function (i, el) {

            if ($(el).attr('data-count') < $(element).find('.slider').slider("values", 0) || $(el).attr('data-count') > $(element).find('.slider').slider("values", 1)) {
                $(el).addClass('unselected')
            } else {
                $(el).removeClass('unselected')
            }
        });
    });


}
function CreateItems(object, item) {
    $.each(object, function (i, e) {
        let count = i;
        $(item).find('.body-goods').append(`
        <tr class="body-item body_item_`+ i + `" 
        data-id="` + e.id + `" 
        data-grade="` + e.grade + `" 
        data-polish="` + e.polish + `" 
        data-diameter="` + e.diameter + `" 
        data-type="` + e.type + `" 
        data-dopant="` + e.dopant + `" 
        data-orientation="` + e.orien + `" 
        data-resmin="` + e.resMin + `" 
        data-resmax="` + e.resMax + `" 
        data-thickness="` + e.thick + `" 
        data-lead="`+e.leadTime+`">
            <td class="body-good qty-des">
                <select name="qty"></select>
                <a href="javascript:void(0)" class="add-to-cart"><i class="fa fa-cart-arrow-down"></i></a>
            </td>
            <td class="body-good" data-info="`+e.id+`" data-parameter="id">
                 `+ e.id + `
            </td>
            <td class="body-good" data-info="`+e.diameter+`" data-parameter="diameter">
                 `+ e.diameter + `
            </td>
            <td class="body-good" data-info="`+e.type+`" data-parameter="type">
                 `+ e.type + `
            </td>
            <td class="body-good" data-info="`+e.dopant+`" data-parameter="dopant">
                 `+ e.dopant + `
            </td>
            <td class="body-good" data-info="`+e.orien+`" data-parameter="orientation">
                 `+ e.orien + `
            </td>
            <td class="body-good" data-info="`+e.grade+`" data-parameter="grade">
                 `+ e.grade + `
            </td>
            <td class="body-good" data-info="`+e.polish+`" data-parameter="polish">
                `+ e.polish + `
            </td>
            <td class="body-good" data-info-resmin="`+e.resMin+`" data-info-resmax="`+e.resMax+`" data-parameter="resistivity">
                 `+ e.resMin + `-` + e.resMax + `
            </td>
            
            <td class="body-good" data-info="`+e.thick+`" data-parameter="thickness">
                 `+ e.thick + `
            </td>
            <td class="body-good" data-info="`+e.leadTime+`" data-parameter="lead">
                 `+ e.leadTime + `
            </td>
            <td class="body-good" data-info="`+e.quantity+`" data-parameter="quantity">
                 `+ e.quantity + `
            </td>
        </tr>
        `);
        $.each(e.qty, function (key, val) {
            $('.body_item_' + count).find('select').append('<option value="' + val + '">' + val + '</option>')
        });
    });
}
function filterItems() {
    let TYPE_VALUES = [],
        GRADE_VALUES = [],
        POLISH_VALUES = [],
        DOPANT_VALUES = $('.dopant-filter').find('select').children('option:selected').val(),
        ORIENTATION_VALUES = [],
        DIAMETER_VALUE = $('.diameter-filter').find('select').children('option:selected').val(),
        THICKNESS_VALUE = $('.thickness-filter').find('select').children('option:selected').val(),
        RESISTIVITY_VALUES = [$('.res-filter').find('.slider').slider("values", 0), $('.res-filter').find('.slider').slider("values", 1)];

    $('.type-filter').find('.slider-value:not(.unselected)').each(function (i, elem) {
        TYPE_VALUES.push($(elem).text())
    });
    $('.grade-filter').find('.slider-value:not(.unselected)').each(function (i, elem) {
        GRADE_VALUES.push($(elem).text())
    });
    $('.polish-filter.toggled').find('.slider-value:not(.unselected)').each(function (i, elem) {
        POLISH_VALUES.push($(elem).text())
    });
    $('.dopant-filter.toggled').find('.slider-value:not(.unselected)').each(function (i, elem) {
        DOPANT_VALUES.push($(elem).text())
    });
    $('.orientation-filter.toggled').find('.slider-value:not(.unselected)').each(function (i, elem) {
        ORIENTATION_VALUES.push($(elem).text())
    });
    $('.body-item').each(function (i, elem) {
        if (!TYPE_VALUES.includes($(elem).attr('data-type')) ||
            !GRADE_VALUES.includes($(elem).attr('data-grade')) ||
            (!POLISH_VALUES.includes($(elem).attr('data-polish')) && $('.polish-filter').hasClass('toggled')) ||
            ($(elem).attr('data-dopant') !== DOPANT_VALUES && DOPANT_VALUES !== dopantArray[0] && $('.dopant-filter').hasClass('toggled')) ||
            (!ORIENTATION_VALUES.includes($(elem).attr('data-orientation')) && $('.orientation-filter').hasClass('toggled')) ||
            ($(elem).attr('data-diameter') !== DIAMETER_VALUE && DIAMETER_VALUE !== diametersNames[0])||
            ($(elem).attr('data-thickness') !== THICKNESS_VALUE && $('.thickness-filter').hasClass('toggled')) ||
            (($(elem).attr('data-resmin') < RESISTIVITY_VALUES[0] || $(elem).attr('data-resmax') > RESISTIVITY_VALUES[1]) && $('.res-filter').hasClass('toggled'))) {
            $(elem).removeClass('not-removed').hide()
        } else {
            $(elem).addClass('not-removed').show()
        }
    });
    console.log($('#all-tab'))
    document.getElementById('all-tab').innerText = 'All Wafers ('+$('#all .body-item.not-removed').length + ')';
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
            filterItems();
        }
    });
    $(element).find('.minValue').val(txt + $(element).find('.slider').slider("values", 0));
    $(element).find('.maxValue').val(txt + $(element).find('.slider').slider("values", 1));
    $(element).find('.range').text('(' + txt + $(element).find('.slider').slider("values", 0) + ' - ' + txt + $(element).find('.slider').slider("values", 1) + ')')
}
function CreateDropdownFilter(element, array) {
    $.each(array, function (i, e) {
        $(element).find('.dropdown-selector').append('<option value="' + e + '">' + e + '</div>');
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
                filterItems()
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
function sortingItems(parameter, direction) {
    
    let hegArray = [];
   
    if (parameter == 'id' || parameter == 'diameter' || parameter == 'quantity' || parameter == 'thickness') {
        $('.body-item').each(function(i, e) {
            hegArray.push($(this).find('.body-good[data-parameter="'+parameter+'"]').attr('data-info'))
        });
        if (direction == 'asc') {
            hegArray.sort((a, b) => {
                a = Number(a.replace('mm', ''));
                b = Number(b.replace('mm', ''))
                return (a - b)
            })
        } else {
            hegArray.sort((a, b) => {
                a = Number(a.replace('mm', ''));
                b = Number(b.replace('mm', ''))
                return (b - a)
            })
        }
    } else if (parameter == 'resistivity'){
        $('.body-item').each(function(i, e) {
            hegArray.push($(this).find('.body-good[data-parameter="'+parameter+'"]').attr('data-info-resmin') + '-' +$(this).find('.body-good[data-parameter="'+parameter+'"]').attr('data-info-resmax'))
        }); 
        if (direction == 'asc') {
            $.each(hegArray, function(i, elem){
                elem.replace('-', ' ').replace('>', ' ').replace('<', ' ').split(' ');
                elem = {
                    min: Number(elem[0]),
                    max: Number(elem[1])
                }
            })
            console.log(hegArray)
            hegArray.sort((a, b) => {
                a = a.replace('-', ' ').replace('>', ' ').replace('<', ' ').split(' ');
                a = {
                    min: Number(a[0]),
                    max: Number(a[1])
                }
                b = b.replace('-', ' ').replace('>', ' ').replace('<', ' ').split(' ');
                b = {
                    min: Number(b[0]),
                    max: Number(b[1])
                }
                if (a.min < b.min && a.max < b.max){
                    
                    return (a - b)
                } else if (a.min < b.min && a.max > b.max) {

                    return (a - b)
                } else if (a.min > b.min && a.max < b.max){
                    return (b - a)
                } else if (a.min > b.min && a.max > b.max){
                    return (b - a)
                } else {
                    return (a - b)
                }
            })
        } else {
            hegArray.sort((a, b) => {
                a = a.replace('-', ' ').replace('>', ' ').replace('<', ' ').split(' ');
                a = {
                    min: Number(a[0]),
                    max: Number(a[1])
                }
                b = b.replace('-', ' ').replace('>', ' ').replace('<', ' ').split(' ');
                b = {
                    min: Number(b[0]),
                    max: Number(b[1])
                }
                if (a.min > b.min && a.max > b.max){
                    return (a - b)
                } else if (a.min > b.min && a.max < b.max) {
                    return (a - b)
                } else if (a.min < b.min && a.max < b.max){
                    return (b - a)
                } else if (a.min < b.min && a.max < b.max){
                    return (b - a)
                } else {
                    return (b - a)
                }
            })
        }
    }
   
    $.each(hegArray, function(i, elem){
        $('.heh[data-sort="'+elem+'"').appendTo('.lul')
    })
}
function keyUpFunctions() {
    $(".minValue").change(function () {
        $(this).parent().next().slider('values', 0, $(this).val());
    });
    $(".maxValue").change(function () {
        $(this).parent().next().slider('values', 1, $(this).val());
    });
}
function onchangeFunctions() {
    $('.diameter-filter').find('select').on('change', function () {
        filterItems()
    });
    $('.thickness-filter').find('select').on('change', function () {

        $('.thickness-filter').addClass('toggled');
        $('.thickness-filter').find('.toggle-button-space').addClass('toggled')
        filterItems()
    });
    $('.dopant-filter').find('select').on('change', function () {

        $('.dopant-filter').addClass('toggled');
        $('.dopant-filter').find('.toggle-button-space').addClass('toggled')
        filterItems()
    });
    $('.header-cell').on('click', function(){
        if ($(this).hasClass('asc')) {
            $('.header-cell').removeClass('asc');
            $(this).addClass('desc')
            sortingItems($(this).attr('data-parameter'), 'desc')
        } else {
            $('.header-cell').removeClass('asc').removeClass('desc');
            $(this).addClass('asc');
            sortingItems($(this).attr('data-parameter'), 'asc')
        }
        
        
    })
}
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
    if (window.innerWidth > 768) {
        function c(e) {
            let t = $(e).position().left
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
        console.log(array)
        for (i = 0; i <= array.length; i++) {
            if (i == 1) {
                $('.menu-table').append('<div class="column"><ul></ul></div>');
                 $('.menu-table .column ul').last().append('<li><a href="javascript:void(0)">' + array[i] + '</a></li>')
            } else if (i % 16 === 0) {
                $('.menu-table').append('<div class="column"><ul></ul></div>');
            } else if (typeof(array[i]) !== 'undefined') {
                $('.menu-table .column ul').last().append('<li><a href="javascript:void(0)">' + array[i] + '</a></li>')
            }
            if (i == array.length && $('.menu-table .column').last().children('ul').children().length == 0) {
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
    } else {
        $.each(array, function(i, elem) {
            $('#mobile-menu').append('<li><a href="javascript:void(0)">'+elem+'</a></li>')
        })
       
    }
}