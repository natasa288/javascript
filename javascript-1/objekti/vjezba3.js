//const { _ } = require("core-js");
var dobro = 1234567890;
var lose = "1123456";
//*var jedinstveniZnakovi= function(password){
    console.log("test " + password);
    let isNum = _.isNumber(password);
    console.log("is number " + isNum);
};*//

function isUniqueCharacters(password)
{
     var myArray = [];
    for (var i = 0; i<=password.length; i++){
        var myChar = password.charAt(i);
        if(!myArray.includes(myChar)){
            
            myArray.push(myChar);
        }
       else{
           return false;
       }
      
    }
    return true;
}


isUniqueCharacters(lose);


jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);