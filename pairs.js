var init;
var foundTarget =0;
var listNumber = [];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function inputInit() {
    readline.question('input totalNumber & iteration number(with space):',number=>{
        init = number.split(" ");
        setListNumber()
    });

}

function setListNumber(){
    readline.question('input listNumber(with space):',number=>{
        tempNumber = number.split(" ")
        for(var i=0;i<parseInt(init[0]);i++){
            listNumber.push(tempNumber[i])
        }
        result();
        readline.close();
    });
    
}

function result(){
    var iteration = init[0];
    var targetDiff = init[1];
    for(i=0;i<iteration;i++){
        for(y=i;y<iteration;y++){
            var result = listNumber[i] - listNumber[y];
            if(result<0)result*=-1;
            if(result == targetDiff) foundTarget++;
        }
    }

    console.log(foundTarget);
}

inputInit()