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

var saveBtn = $("#saveBtn");

saveBtn.click(function(){
    onSave("nineam");
    onSave("tenam");
    onSave("elevenam");
    onSave("twelveam");
    onSave("onepm");
    onSave("twopm");
    onSave("threepm");
    onSave("fourpm");
    onSave("fivepm");

}) 



function onSave (label) {
    localStorage.setItem(label, nineam.value);
    localStorage.setItem(label, tenam.value);
    localStorage.setItem(label, elevenam.value);
    localStorage.setItem(label, twelveam.value);
    localStorage.setItem(label, onepm.value);
    localStorage.setItem(label, twopm.value);
    localStorage.setItem(label, threepm.value);
    localStorage.setItem(label, fourpm.value);
    localStorage.setItem(label, fivepm.value);
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

init ()

function background () {
    var hours 
    console.log(hours)

}