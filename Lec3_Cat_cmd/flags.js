let fs = require("fs")

let fileData = fs.readFileSync("./f1.txt")

fileData = fileData + ""

// -s => removes extra spaces
let data=fileData.split("\r\n");
//console.log(data);
let removedSpaces = [];
let emptyPushed = false;
function removeLargeSpaces(data){
    for(let i=0 ; i<data.length ; i++){
        data[i] = data[i].trim();
        if( data[i] == '' && !emptyPushed ){
            
            removedSpaces.push(data[i]);
            emptyPushed = true;
            
            
        }
        else if(data[i] != ''){
            removedSpaces.push(data[i]);
        }
    }
}
removeLargeSpaces(data);
let joinedString = removedSpaces.join("\n");
console.log(joinedString);


// -b => add line numbers 
let count = 1;
function addLineNumberToNonEmptyLines(data){
    for(let i=0 ; i<data.length ;i++){
        if(data[i] != ''){
            data[i] = `${count}. ${data[i]}`;
            count++;
        }
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
}

addLineNumberToNonEmptyLines(data);



// -n => add count to all lines
function addLineNumberToAllLines(data){
    for(let i=1 ; i<data.length+1 ; i++){
        data[i-1] = `${i}. ${data[i-1]}`;
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
}
addLineNumberToAllLines(data);

