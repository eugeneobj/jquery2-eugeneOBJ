$(document).ready(function(){
    "use strict";
    //In the next line we select the item with the ID "myList" and then the first "li" in that item. We add a ".on" event handler with "mouseover" and create an anonymous function which runs when the event is triggered.
    $("#myList li:first").on("mouseover", function(evt){
        $(this).css("color","green");
    });
	
	//ASSIGN FUNCTIONS
    //The next line puts an "on click" handler and is almost the same but it calls a named function.
    $("#square1").on("click", swapMe);
	$("#square1").on("dblclick", swapMe2);
	
    //This uses a shorthand way attaching a click handler.
    $("#myList li:nth-child(3)").click(myFunction2);
    $("#myList li:nth-child(4)").on("click", myFunction3);
    $("#myList li:nth-child(5)").one("click", function(evt) {
        myFunction4("#square4");
                                   });
    $("#square4").hide();
	$("#square2").on("mouseover", move);
});
//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.
    // create a variable and store the contents of the third item.
    // Replace 3rd & 4th item
    // Replace the contents of item 4 with the contents of the "tempText".

function swapMe() {
    var tempText = $("#header1").text();
    $("#header1").text($("#square1").text());
    $("#square1").text(tempText);
};

function swapMe2() {
    var tempText = $("#header2").text();
    $("#header2").text($("#square1").text());
    $("#square1").text(tempText);
};

//-------------------------------------------------------------------
// Change the css

function myFunction2() {
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"300%"});
}
//-------------------------------------------------------------------

//Here is a neat one. Add a new class to tag so it takes on a whole new look.
//Also, because it uses "this" the same function can be used on many items.

function myFunction3() {
    $(this).toggleClass("long-shadow");
};
//-------------------------------------------------------------------
function myFunction4(myObject) {
    $(myObject).slideDown()
        .delay(2000)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "slow");
}
//-------------------------------------------------------------------
function move(myObject) {
    $(square3).slideDown()
        .animate({left: '+=700px'});
}
