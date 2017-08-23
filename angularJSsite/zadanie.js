var app = angular.module('convertApp',[]);


app.controller('tempConverter', function($scope, $filter){
    
    $scope.convert = function(){
        
        
        switch($scope.unit){
                
            case "C":
                
$scope.farr =  (9/5) * parseFloat($scope.napis) + 32 || 0;
$scope.kelv = parseFloat($scope.napis) + 273.15 || 0;
$scope.celc = null;
               break;
                
            case "K":
$scope.farr = parseFloat($scope.napis) + 457.87 || 0;
$scope.celc = parseFloat($scope.napis) - 273.15 || 0; 
$scope.kelv = null;
            break    
                
            case "F":
$scope.celc = ( parseFloat($scope.napis) ) -32 / 1.8 || 0;
$scope.kelv = parseFloat($scope.napis) + 255.93 || 0;
$scope.farr = null;
             break   
                
                         }
            
        
        
        
    }
    
});
    