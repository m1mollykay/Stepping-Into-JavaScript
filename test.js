//for loop: continue or break

//standard name for variables is x or j or i
//index variable; loop condition; incrementer for ending loop
for ( i = 0; i <= 10; i++)       
    
    if (i === 3 || i === 5) {         
    
        continue;
    }  //skip code block for 3 or 5 to go back up to the code to start with 4 or 6

console.log (i);

    if (i === 7) {
        
        break; 
    }   //break out of loop for good with no loop for 8 or 9

}

console.log ("I have broken out of the loop");
    
