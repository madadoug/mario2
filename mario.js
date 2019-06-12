
drawPyramid(5);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">

   // var bye = document.getElementById("construction");
   // var paragraph =  document.querySelector("p1");
   // bye.removeChild(paragraph);
// so I ended up deleting the html like we werent supposed to because im unsure why my code isnt working
//above is the code i used
 
  

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

     

        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">
        var mario = document.createElement("p");
        mario.innerText =rowStr;
        var bricks = document.getElementById("pyramid");
        bricks.appendChild(mario);
       
    }
   
}
