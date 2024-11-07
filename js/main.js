function counterPlus(){
  
   var $counter= document.getElementById("counter").value ++; 
   if($counter>15){
    alertCount($counter);
   }
}

function counterMinus(){
    var $counter= document.getElementById("counter").value --; 
    
 }
 function counterZero(){
    var $counter= document.getElementById("counter").value=0; 
 }

 function alertCount($number){
   alert('Counter : ' +$number);
 }