
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


return result={longwords,token}

}

