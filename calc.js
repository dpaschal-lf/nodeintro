


function doMath( num1, operator, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var calculateMap = {
        '+': (num1, num2)=>num1+num2,
        'why are you looking at me?': 'this is not the code you\'re looking for',
        '*': (num1, num2)=>num1*num2,
        '/': (num1, num2)=>num1/num2,
        '-': (num1, num2)=>num1-num2
    }
    calculateMap['x']=calculateMap['X'] = calculateMap['*'];
    var result = calculateMap[operator](num1, num2);
    return result;
}

var num1 = process.argv[2];
var num2 = process.argv[4];
var operator = process.argv[3];

console.log( doMath(num1, operator, num2 ) );