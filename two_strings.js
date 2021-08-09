var init;
var listString = []
var inputRepeat = 0;
var totalInput = 0;
var tempListString = [];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function inputInit() {
    readline.question('input iteration:', number => {
        init = parseInt(number);
        inputString()
    });

}

function inputString() {

    console.log("input string:")

    readline.question('', data => {
        tempListString.push(data)
        totalInput++;
        if(totalInput%2 == 0){
            listString.push([tempListString[0], tempListString[1]])
            tempListString = []
            inputRepeat++
            if (inputRepeat == init) {
                result()
                readline.close()
            }else{
                inputString()
            }
        }else{ 
            inputString()
        }    
    });
    
}

function result() {
    for(i=0;i<init;i++){
        found = 0;
        for(y=0;y<listString[i][0].length;y++){
            for(k=0;k<listString[i][1].length;k++){
                if(listString[i][0].charAt(y) == listString[i][1].charAt(k)){
                    found++;
                    break;
                }
                if(found != 0)break;
            }
        }
        if(found !=0){
            console.log("YES")
        }else console.log("NO")
    }
}

inputInit()