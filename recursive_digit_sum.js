var init;
var digit;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function inputInit() {
    readline.question('input number and iteration:', number => {
        init = number.split(" ");
        digit = init[0] + init[0]+ init[0]
        readline.close()
        result()
    });

}


function result() {
    var digitResult = "";
    while(true){
        if(digitResult == "")digitResult = super_digit(digit).toString()
        else digitResult = super_digit(digitResult).toString()
        if(digitResult.length == 1)break;
    }
    console.log(digitResult)
}

function super_digit(number) {
    var result = 0;

    for (i = 0; i < number.length; i++) {
        result += parseInt(number.charAt(i))
        
    }
    return result;
}

inputInit()