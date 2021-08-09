var init;
var listUser = [];
var inputRepeat = 0;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function inputNumber() {
    readline.question('input totalUser:', number => {
        init = parseInt(number);
        inputUser()
    });

}

function inputUser() {

    readline.question('input :', data => {
        listUser.push(data.split(" "))
        inputRepeat++;
        if (inputRepeat != init) inputUser();
        else {
            readline.close()     
            sorting()
        }
    });

}

function sorting() {
    
    for (i = 0; i < init; i++) {

            for (y = 0; y < init; y++) {
                var temp;
                
                console.log(i + " " + y)
                switch (comparator(parseInt(listUser[i][1]), parseInt(listUser[y][1]))) {
                    case -1: {
                        if(i<y){
                            temp = listUser[i];
                            listUser[i] = listUser[y]
                            listUser[y] = temp;

                        }
                        break;
                    }
                    case 0: {
                        switch (listUser[i][0].localeCompare(listUser[y][0])) {
                            case -1: {
                                if(i<y){
                                    temp = listUser[i];
                                    listUser[i] = listUser[y]
                                    listUser[y] = temp;

                                }
                                break;
                            }
                            case 0:
                                break;
                            case 1: {
                                if(i>y){
                                    temp = listUser[y];
                                    listUser[y] = listUser[i]
                                    listUser[i] = temp;
                                }
                                break;
                            }
                        }
                    }
                    case 1: {
                        if(i>y){
                            temp = listUser[y];
                            listUser[y] = listUser[i]
                            listUser[i] = temp;

                        }
                        break;
                    }
                }
                console.log(listUser)
            }
            
    }
}

function comparator(a, b) {
    if (a < b) return -1
    else if (a == b) return 0
    else if (a > b) return 1
}

inputNumber();