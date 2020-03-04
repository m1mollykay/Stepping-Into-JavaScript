//variable scope

var average = 0;  //changing original local variable into a global variable  

function getAverage (a,b) { //local variable inside function code block 
    average = (a + b) /2;
    console.log (average);
    return average;

//global variable can be used anywhere in the code to call wherever needed
var myResult = getAverage (7,11);

function logResult() {
    
  console.log ("the average is " + myResult +  "inside the function"); 
}

 logResult();
  
}
//end variable scope
