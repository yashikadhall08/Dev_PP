let fs = require("fs")

let content = process.argv.slice(2);

//console.log(content);

let flags = [];
let files = [];

for(let i =0;i < content.length;i++){
    if(content[i].startsWith('-')){
        flags.push(content[i]);
    }
    else{
        files.push(content[i]);
    }
}
let fileData = ""
for(let i =0;i<files.length;i++){
  fileData += fs.readFileSync(files[i]) + "" //readFIleSync gives data in buffer form to receive data in string form we use + ""
}

console.log(fileData)