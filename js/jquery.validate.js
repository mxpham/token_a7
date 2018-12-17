//
//Date: December 16, 2018
//SID: 01617504
//91.61 GUI Programming I Assignment: Using Validation Plugins for
//dynamic multiplication table
//Mai Pham, UMass Lowell Computer Science, Mai_Pham@student.uml.edu
//Copyright (c) 2018 by Mai Pham. All rights reserved.
//
//allows for the table to appear
$("#multiply-form").submit(function(e){
    e.preventDefault();
});

//validator method to determine the larger input value
$.validator.addMethod('large', function(value, element, param) {
      return this.optional(element) || value >= $(param).val();
}, 'Invalid value');

//most of excerpt copied from /~heines/91.461/91.461-2012-13f/461-lecs/code/jmh-table-v5.html
//by Jesse M. Heines from here....
var tblValidator = {
  highlightError : function( strVarToTest ) {
    //styles elements containing errors
    $( '#' + strVarToTest ).css( { "border" : "2px solid red" } )  ;
    $( '#' + strVarToTest ).focus() ;
  } ,

  unhighlightError : function( strVarToTest ) {
    $( '#' + strVarToTest ).css( { "border" : "" } )  ;
  } ,
}
//validation plugin
$("#multiply-form").validate({

//there must be input, must be digit, and follow appropriate range values
  rules: {
    h1: { //minimum row value
      required: true,
      digits:true
    },
    h2: { //maximum row value
      required: true,
      digits:true,
      large: 'input[name="h1"]' //max must be greater than min
    },
    v1: { //minimum column value
      required: true,
      digits:true,
    },
    v2: { //maximum column value
      required: true,
      digits:true,
      large: 'input[name="v1"]' //max must be greater than min
    },
  },
  //handling errors with messages
  messages: {
    //input boxes are highlighted and focused until appropriate value is inputted
    h1: {
      required: function() {
              tblValidator.highlightError( "h1" ) ;
              return "The minimum horizontal value is <em>required.</em>" ;
            },
      digits: function() {
              tblValidator.highlightError( "h1" ) ;
              return "Input is not a <em>number.</em>" ;
            },
    },
    h2: {
      required: function() {
              tblValidator.highlightError( "h2" ) ;
              return "The maximum horizontal value is <em>required.</em>" ;
            },
      digits: function() {
              tblValidator.highlightError( "h2" ) ;
              return "Input is not a <em>number.</em>" ;
            },
      large: function() {
              tblValidator.highlightError( "h2" ) ;
              return "Must be <em>larger</em> than minimum horizontal" ;
            },
    },
    v1: {
      required: function() {
              tblValidator.highlightError( "v1" ) ;
              return "The minimum vertical value is <em>required.</em>" ;
            },
      digits: function() {
              tblValidator.highlightError( "v1" ) ;
              return "Input is not a <em>number.</em>" ;
            },
    },
    v2: {
      required: function() {
              tblValidator.highlightError( "v2" ) ;
              return "The maximum vertical value is <em>required.</em>" ;
            },
      digits: function() {
              tblValidator.highlightError( "v2" ) ;
              return "Input is not a <em>number.</em>" ;
            },
      large: function() {
              tblValidator.highlightError( "v2" ) ;
              return "Must be <em>larger</em> than minimum vertical" ;
            },
    },
  },

//reset to default input layout if inputs are valid again
   success : function( error, element ) {
     $(element).css( { "border" : "" } ) ; // reset the border to its default
   }
});
// ... to here
