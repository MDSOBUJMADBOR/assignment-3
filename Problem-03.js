

function finalScore (omr) {
          let currectNumber=omr.right;
         let falseNumber=omr.wrong;
         let skipNumber=omr.skip;
         let Total=currectNumber + falseNumber + skipNumber;

if(Total !== 100){
return 'Invalid';
}

let totalNumber=currectNumber*1;
let totalFalseNumber=falseNumber*(0.5);
let totalSkipNumber=skipNumber*0;

let resultNumber=totalNumber - totalFalseNumber;


let finalNumber=resultNumber - totalSkipNumber;
let result=Math.round(finalNumber);

return result;
}
