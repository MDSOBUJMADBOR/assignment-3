

function newPrice(currentPrice , discount ) {
          if(typeof currentPrice !== 'number' || typeof discount !== 'number'){
          return 'Invalid';
          }
          if(discount>100 || discount <0){
          return 'Invalid';
          }


let result=currentPrice*discount/100;
let payAmount=currentPrice - result;
let discountNumber=payAmount.toFixed(3);
return discountNumber;

}

//----------------------------------------


function validOtp(otp) {
          if(typeof otp !== 'string'){
          return 'Invalid';
          }

let reasons=[];

let startsWith=otp.startsWith('ph-');
if(startsWith == false){
reasons.push('ph- not found');
}

if(otp.length !== 8){
reasons.push('character of 8')
}


let isValid;
if(reasons.length === 0){
isValid = true;
}
else{
isValid =false;
}

return isValid;

}

//-------------------------------------


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

//-------------------------------------------


function gonoVote(array) {

          if(Array.isArray(array) === false){
          return 'Invalid';
          }

let foundArray=array;

let count1=0;
let count=0;
for(let i=0;i<foundArray.length;i++){
          if(foundArray[i].toLowerCase() ==='ha'){
                    count++;
          }
          if(foundArray[i].toLowerCase() ==='na'){
                    count1++;
          }
}

if(count > count1){
return true;
}
else if(count == count1){
return 'equal';
}
else{
return false;
}

}

//---------------------------------------------

/*function signature/sample */
function  analyzeText(str) {
          
          if(typeof str !=='string'){
          return 'Invalid';
          }
        
if(str.trim() === ''){
return 'Invalid';
}

let words=str.split(' ');

let wordjoin=words.join('');

let token=wordjoin.length;

let longwords=words[0];

          for(let word of words){
          
                    if(word.length > longwords.length){
                    longwords=word;
                    }
          }


return result={longwords,token};

}

// let result='I am a little honest person';
// let analyze=analyzeText(result);
// console.log(analyze);

