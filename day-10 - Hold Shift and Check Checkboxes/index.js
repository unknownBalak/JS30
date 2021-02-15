let formList = document.querySelectorAll('.formClass input');
let intialValue = 0,lastValue = 0;

function checkAllBoxex(Nodearr,initialValue,lastValue) {
  let arr = Array.from(Nodearr);
     console.log('new Arr',arr);
    while(initialValue<lastValue){
             arr[initialValue].checked = true;
             initialValue++;   
         }
 }
function showKeyCode(e) {
      console.log('we are her',e.shiftKey);
    if(intialValue){
        lastValue = this.value;
        
    }else{
        intialValue = this.value; 
     }
     if(intialValue !== 0 && lastValue!==0 && e.shiftKey){
         if(lastValue<intialValue){
             [intialValue,lastValue] = [lastValue,intialValue];
         }
           checkAllBoxex(formList,intialValue,lastValue)
}    
}
 formList.forEach(input =>{
     input.addEventListener('click',showKeyCode);

 })