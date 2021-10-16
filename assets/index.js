var currentDay = moment().format("[Today is: ]dddd MMM, Mo");
$("#currentDay").text(currentDay);

var nineam = document.getElementById("input09am");
var tenam = document.getElementById("input10am");
var elevenam = document.getElementById("input11am");
var twelveam = document.getElementById("input12am");
var onepm = document.getElementById("input01pm");
var twopm = document.getElementById("input02pm");
var threepm = document.getElementById("input03pm");
var fourpm = document.getElementById("input04pm");
var fivepm = document.getElementById("input05pm");

var hour = moment().hours();

var saveBtn09 = $("#saveBtn09");
var saveBtn10 = $("#saveBtn10");
var saveBtn11 = $("#saveBtn11");
var saveBtn12 = $("#saveBtn12");
var saveBtn13 = $("#saveBtn13");
var saveBtn14 = $("#saveBtn14");
var saveBtn15 = $("#saveBtn15");
var saveBtn16 = $("#saveBtn16");
var saveBtn17 = $("#saveBtn17");

saveBtn09.click(function(){
    onSave("nineam", nineam);
})

saveBtn10.click(function(){
    onSave("tenam", tenam);
}) 

saveBtn11.click(function(){
    onSave("elevenam", elevenam);
}) 

saveBtn12.click(function(){
    onSave("twelveam", twelveam);
}) 

saveBtn13.click(function(){
    onSave("onepm", onepm);
}) 

saveBtn14.click(function(){
    onSave("twopm", twopm);
}) 

saveBtn15.click(function(){
    onSave("threepm", threepm);
}) 

saveBtn16.click(function(){
    onSave("fourpm", fourpm);
}) 

saveBtn17.click(function(){
    onSave("fivepm", fivepm);
}) 

function onSave (label, inputElement) {
    localStorage.setItem(label, inputElement.value);
    
}

function init () {
    console.log("nineam")
    nineam.value = localStorage.getItem("nineam");
    tenam.value = localStorage.getItem("tenam");
    elevenam.value = localStorage.getItem("elevenam");
    twelveam.value = localStorage.getItem("twelveam");
    onepm.value = localStorage.getItem("onepm");
    twopm.value = localStorage.getItem("twopm");
    threepm.value = localStorage.getItem("threepm");
    fourpm.value = localStorage.getItem("fourpm");
    fivepm.value = localStorage.getItem("fivepm");
} 


function background () {
     
    $(".row").each(function () {
        var rowhour = parseInt($(this).attr("id"));
        console.log(hour)
        console.log(rowhour)
        console.log($(this).find('textarea'));
        if (rowhour < hour) {
            $(this).addClass("past");
        } else if (hour === rowhour) {
            $(this).addClass("present");
        } else if (hour > rowhour) {
            $(this).addClass("future");
        }
    });
  }

 background()
 init ()