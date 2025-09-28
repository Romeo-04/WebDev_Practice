function subscribed(){
    document.querySelector(".js-button").innerHTML = "Subscribed";
}

function calculateShipping(inp = 0){
   const orderAmount = parseFloat(document.querySelector(inp).value) || 0;
   let shippingCost = 0;

   if (orderAmount < 40) {
       shippingCost = 10;
   }

   result = orderAmount + shippingCost;
   
   document.getElementById("result").innerHTML = "Total Amount: $" + result;
}