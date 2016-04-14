/*
Program Name: Recipe Display Application
Author: Joseph DiMartino Brierton
Date: 4.6.16
Filename: script.js
*/

function display(event){
    $(event.currentTarget).next().fadeIn("slow");
}
    //attach event listener to h3 elements to invoke display function when clicked
    //$("h3").click(display);
    

function display2(event){
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}
$("h3").click(display2);

$("h3").hover(function() {
    $(this).css("background-color", "yellow");
}, function(){
    $(this).css("background-color", "pink");
})

$("h3").hover(display2);
