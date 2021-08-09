var init
var listNumber = []
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function setNumberAndRotate(){
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
        result()
        readline.close();
    });
    
}

function result(){
    
    var totalLength = parseInt(init[0]);
    var resultList;
    var rotateNumber = init[1];
    var temp = listNumber 
    
    for(var i=0; i<rotateNumber; i++){
        var fixListNumber = [];
        temp.forEach(x=>{
            fixListNumber.push(x)
        })
        for(var y=0; y<totalLength; y++){
            temp[y]=(fixListNumber[y+1] != null ? fixListNumber[y+1] : fixListNumber[0])
        }
        resultList = temp;
        console.log(resultList)
    }

    console.log('\n\nList Result : '+resultList)
}

    setNumberAndRotate()

