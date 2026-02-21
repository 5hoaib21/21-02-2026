

document.getElementById('login-btn').addEventListener('click',
  function(){
   //1 get the phn no.
   const numberInp = document.getElementById('inp-number')
   const contactNumber = numberInp.value;
  console.log(contactNumber);
    //2 get the pin 
    const pinInp = document.getElementById('inp-pin');
    const pin = pinInp.value;
    console.log(pin);
   //3 matched pin & phn no 
   if(contactNumber == '12345678901' && pin == '1234'){
     //4 if true ::: alert > homepage
    alert('login succeed')
    window.location.assign('/home.html')
   }else{
     //5 if false ::: alert > return;
    alert('login failed')
    return;
   }
  }
)












































// document.getElementById("login-btn").addEventListener("click", function () {
//   //1 get the phn no.
//   const numberInp = document.getElementById("inp-number");
//   const contactNumber = numberInp.value;
//   console.log(contactNumber);
//   //2 get the pin
//   const pinInp = document.getElementById("inp-pin");
//   const pin = pinInp.value;
//   console.log(pin);

//   //3 matched pin & phn no
//   if (contactNumber == "12345678901" && pin == "1234") {
//     //4 if true ::: alert > homepage
//     alert("login succeed");
//     window.location.assign("/home.html")
//   }else{
//     //5 if false ::: alert > return;
//     alert('login failed')
//     return;
//   }
// });
