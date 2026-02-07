
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
