//Date: November 15, 2018
//SID: 01617504
//91.61 GUI Programming I Assignment: Creating an Interactive Dynamic Table
//Mai Pham, UMass Lowell Computer Science, Mai_Pham@student.uml.edu
//Copyright (c) 2018 by Mai Pham. All rights reserved.


//source for creating a dynamic table
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
function generate_table(h1, h2, v1, v2) {
  var w = document.getElementById('h1').value;
  var x = document.getElementById('h2').value;
  var y = document.getElementById('v1').value;
  var z = document.getElementById('v2').value;

  var row_min = parseInt(w);
  var row_max = parseInt(x);
  var column_min = parseInt(y);
  var column_max = parseInt(z);

  //if function returns true, there were no errors; create empty table


  var row_range = (z - y) + 2;
  var column_range = (x - w) + 2;
  // get the reference for the body

  // creates a <table> element and a <tbody> element
  var tbl = document.getElementById("myTable");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < row_range; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < column_range; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>


  var myTable = document.getElementById('myTable');

  //fills in the top row with horizontal parameters
  for(var j = 1, i = row_min; i <= row_max; i++){
    myTable.rows[0].cells[j].innerHTML = i;
    j++;
  }

  //fills in leftmost column with vertical parameters
  for(var j = 1, i = column_min; i <= column_max; i++){
    myTable.rows[j].cells[0].innerHTML = i;
    j++;
  }

  for(var i = 1; i < row_range; i++){
    for(var j = 1; j < column_range; j++){
      var temp1 = myTable.rows[0].cells[j].innerHTML;
      var temp2 = myTable.rows[i].cells[0].innerHTML;
      var product = temp1 * temp2;
      myTable.rows[i].cells[j].innerHTML = product;
    }
  }
}


//function for handling input errors
