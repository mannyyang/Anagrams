var app = angular.module('anagramsApp', []);

app.controller('AnagramsController', AnagramsController);
app.filter("reverse", function() {
    return function(input) {
        var result = "";
        input = input || "";
        for (var i=0; i<input.length; i++) {
            result = input.charAt(i) + result;
        }
        return result;
    };
});

function AnagramsController($scope){
    var anagrams = this;
    this.columnNum = 10;
    this.tileHeight = 25;
    this.maxHeight = this.columnNum * this.tileHeight + 5;

    $scope.$watch('anagrams.columnNum', function(){
        anagrams.maxHeight = (anagrams.columnNum * anagrams.tileHeight + 5);
    });
}