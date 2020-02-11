//for loop: practical example using this loop
//creating an array for anchor tags in the document

//standard name for variables is x or j or i
//index variable; loop condition; incrementer for ending loop
var links = document.getElementByTagName ("a");

for ( i = 0; i < links.length; i++) {       
  
    links [i].className="link-" + i;
    
}   //end loop
