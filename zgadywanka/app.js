console.log("test");


//var liczba = Math.random() * 100; // tak było na poczatku za nim 
//var zaokraglona = Math.floor(liczba);
//console.log(zaokraglona);


var start = document.getElementById('guzik');

start.addEventListener('click', function(){
    var pierwsza = parseInt(document.getElementById('od').value);
    var druga = parseInt(document.getElementById('do').value);
    
       
var losowanie =  pierwsza + Math.round(Math.random() * (druga - pierwsza));
    
    console.log(losowanie);


});
                     
                     



var spr = document.getElementById('guzik');

spr.addEventListener('click', function(){
//    var typ  = document.getElementById('zaokrąglona');
    var uzytkownik = document.getElementById('typ');
    if(uzytkownik.value == losowanie) {
        alert ('Brawo!')
        
    } 
    else{
        alert('bledna liczba')};
    
    if(uzytkownik.value>losowanie){
        alert('Podana liczba jest za duża. Podaj mniejszą wartość.')
    }
    else{
        alert('Podana liczba jest za mała. Podaj większą wartość.')
    }
    
    
});




//var amount = document.getElementById('amount');
//var btn = document.getElementById('count');
//
//
//btn.addEventListener('click', function(){
//    var res = document.getElementById('usd');
//    res.innerHTML = "Kwota w USD " + (parseFloat(amount.value)/ 3.65).toFixed(2);
//   
//    
//});