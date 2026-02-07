
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

