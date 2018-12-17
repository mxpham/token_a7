//Date: December 4th, 2018
//SID: 01617504
//91.61 GUI Programming I Assignment: Creating an Interactive Dynamic Table
//Mai Pham, UMass Lowell Computer Science, Mai_Pham@student.uml.edu
//Copyright (c) 2018 by Mai Pham. All rights reserved.
//

//given range for each slider and sets default input values as 0.
//comments are applicable to all input functions below
$(document).ready(function() {

  $( "#sliderXBegin" ).slider({
    range:"min",
    min:-10,
    max: 10,
    step: 1,
    slide: function(event, ui) {
     $("#h1").val(ui.value);
     auto_submit();
   }

  });
  //checks keyup and generates table on slider location
  $("#h1").on("keyup", function() {
        $("#sliderXBegin").slider("value", this.value);
        auto_submit();
    });
  $( "#sliderXEnd" ).slider({
    range:"min",
    min:-10,
    max: 10,
    step:1,
    slide: function(event, ui) {
     $("#h2").val(ui.value);
     auto_submit();
   }
  });
  $("#h2").on("keyup", function() {
        $("#sliderXEnd").slider("value", this.value);
        auto_submit();
    });

  $( "#sliderYBegin" ).slider({
    range: "min",
    min:-10,
    max: 10,
    step:1,
    slide: function(event, ui) {
     $("#v1").val(ui.value);
     auto_submit();
   }
  });
  $("#v1").on("keyup", function() {
        $("#sliderYBegin").slider("value", this.value);
        auto_submit();
    });

  $( "#sliderYEnd" ).slider({
    range: "min",
    min:-10,
    max: 10,
    step:1,
    slide: function(event, ui) {
     $("#v2").val(ui.value);
     auto_submit();
   }
  });
  $("#v2").on("keyup", function() {
        $("#sliderYEnd").slider("value", this.value);
        auto_submit();
    });
  $( "#h1" ).val($( "#sliderXBegin" ).slider( "value" ) );
  $( "#h2" ).val($( "#sliderXEnd" ).slider( "value" ) );
  $( "#v1" ).val($( "#sliderYBegin" ).slider( "value" ) );
  $( "#v2" ).val($( "#sliderYEnd" ).slider( "value" ) );
});

//checks if form is valid and then submit form
function auto_submit() {
    if ($("#multiply-form").valid() == true) {
        $("#proceed").click();
    }
}
