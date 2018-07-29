var elem= document.getElementById('DaySelect');
var i = 1;
while(i < 32){
    elem.innerHTML +=
    `<option class="form_brithday__day_item">
        ${i}
    </option>`;
    i++;
}
var mouth=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var elem=document.getElementById("MonthSelect");
var n=0;
while(n<12){
    elem.innerHTML+=
    `<option class="form_brithday__month_item">
        ${mouth[n]}
    </option>`;
    n++;
}
var elem= document.getElementById("yearSelect");
var x=1920;
while(x<2019){
    elem.innerHTML+=
    `<option class="form_brithday__year_item">
        ${x}
    </option>`;
    x++;
}
var $win = $(window),
    $fixed = $(".button_top"),
    limit = 300;

function tgl (state) {
    $fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
    var top = $win.scrollTop();

    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});

$('#btn_head').click(function(){
    $('.section_header__burger_item').toggleClass('is-active');
    $('.section_header__menu').toggleClass('hidden');
});