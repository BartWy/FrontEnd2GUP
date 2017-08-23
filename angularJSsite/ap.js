console.log('test')


var app = angular.module('firstApp',[]);

app.controller('firstController', function($scope){
    
    $scope.message = "Witam w świecie Angulara";
    
});

app.controller('childController',function($scope, $filter, limitToFilter){
               $scope.message  = 'Jestem zagnieżdżonym controllerem';
    
    $scope.showMessage = function(){
        alert( limitToFilter($scope.message, 5));
    }
    
    $scope.colors =[
        'black',
        'brown',
        'blue'
    ];
    
    $scope.obj = {id: 5, login:"admin"};
    
    $scope.json = $filter('json')([
        {name:"bartek"},
        {name:"antek"}
        
        
    ]);
    
     $scope.users = [
        {name:"bartek"},
        {name:"antek"}
        
        
    ]
    
    
    $scope.newMsg =$filter('uppercase')("jestem napisany malymi literami");
    $scope.amount = 1000;
    
    $scope.day = new Date(); 
    
    $scope.changeName = function(){
        $scope.users[0].name = "KTOŚ INNY";
    }
    
  $scope.showModel = function(){
      alert($filter('uppercase')($scope.napis));
  }

});



//currency - Format a number to a currency format.
//date - Format a date to a specified format.
//json - Format an object to a JSON string.
//limitTo - Limits an array/string, into a specified number of elements/characters.
//lowercase - Format a string to lower case.
//number - Format a number to a string.
//uppercase - Format a string to upper case.