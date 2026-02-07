
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

