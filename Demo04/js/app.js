var orderItem=require('./order');
var itemid = orderItem.orderItem('o1004');
console.log(itemid);


for(i in itemid){

console.log(orderItem.product(itemid[i]));
  var pdetails = orderItem.product(itemid[i]).unit_price;
  console.log(pdetails);

var totalPrice = totalAmount+totalOrderCost


 var totalOrderCost = orderItem.product(itemid[i]).quantity*pdetails;
 console.log('Total Order Cost'+ totalOrderCost);

 var discount = orderItem.product(itemid[i]).discount*totalOrderCost;
 console.log("Discount Amount"+ discount);
 var totalAmount = totalOrderCost-discount;
 console.log("After Discount Total Amount is "+ totalAmount);

}
console.log("Total cost To be Paid for the Order: "+orderItem+" is ="+totalPrice);