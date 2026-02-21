document.getElementById("btn-cashout").addEventListener("click", function(){
  // alert("btn was clicked")
   
  
  // get agent no.
    const cashoutNumberInput = document.getElementById("cashout-number")
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
      alert('invalid Agent Number')
      return;

    }
   
   
   
    // // get amount ,
   const cashoutAmountInput = document.getElementById("cashout-amount");
   const cahsoutAmount = cashoutAmountInput.value;
   console.log(cahsoutAmount); 
   
   
   // // get crr.Balance,  
   const crrAmount = document.getElementById("balance")
   const balance = crrAmount.innerText;
   console.log("Crr balance is :", balance);
   
   
   // // calculate new Number.
   const newBalance = Number(balance) - Number(cahsoutAmount)
   if( newBalance < 0 ){
     alert("invalid amount")
     return;
    }
   
   const cashoutPin = document.getElementById("cashout-pin")
   const pin = cashoutPin.value;
   console.log(pin);
   
   
   
   // // get the pin verify /.  
   if(pin === '1234'){
    // // if true : show an alert 
     alert('cashout succeed')
     console.log("New Balance is:",newBalance);
     // // //and set the  balance .
     crrAmount.innerText = newBalance;
    }else{
      
      // // if false : show an alert  and return ;
      alert('invalid pin');
      return;
    }
})
















































// document.getElementById("btn-cashout").addEventListener("click", function () {
  
//   // get agent no.
//   const cashoutNumInp = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumInp.value;
//   console.log(cashoutNumber);
//   if(cashoutNumber.length !=11){
//     alert("invalid agent number");
//     return;
//   }
  
  
//   // get amount ,
//   const cashoutAmtInp = document.getElementById("cashout-amount");
//   const cahsoutAmount = cashoutAmtInp.value;
//   console.log(cahsoutAmount);
  
  
//   // get crr.Balance,
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log("Curr Balance:", balance);
  
  
//   // calculate new Number.
//   const newBalance = Number(balance) - Number(cahsoutAmount);
//   if (newBalance < 0) {
//     alert("invalid Amount");
//     return;
//   }
  
  
//   // get the pin verify /.
//   const cashoutPinInp = document.getElementById("cashout-pin");
//   const pin = cashoutPinInp.value;
//   console.log(pin);
//   if (pin === "1234") {
    
//     // if true : show an alert 
//     alert("CashOut succeed")
//     console.log("new balance is:", newBalance);
   
//     // //and set the balance .
//     balanceElement.innerText = newBalance;
//   } else {
    
//     // if false : show an alert  and return ;
//     alert("Invalid Pin")
//     return;
//   }
// });
