console.log("test");

var amount = document.getElementById('amount');
var btn = document.getElementById('count');


btn.addEventListener('click', function(){
    var res = document.getElementById('result');
    res.innerHTML = "Kwata w USD " + (parseFloat(amount.value)/ 3.65).toFixed(2);
   
    
});