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
 $('#map_btn').click(function(){
     $('.map_clients').toggleClass('is-hidden');
     $('html, body').animate({
         scrollTop: $("#map").offset().top
     }, 500);
 });