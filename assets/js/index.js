$(document).ready(function () {
    let country_list = ['APO/FPO (US)', 'Australia', 'Austria','Belgium','Bulgaria', 'Canada','China','Cyprus', 'Czech Republic','Denmark', 'Estonia','Finland','France', 'Germany', 'Greece']
    let selectElem = document.getElementById("shipping-country");
    let option;
    country_list.forEach(function(el, i) {
        option = document.createElement("option");
        option.text = el;
        if (option.text == "Australia") option.selected = true;
        selectElem.appendChild(option);
    });
});