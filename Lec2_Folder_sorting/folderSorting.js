const fs = require("fs");
const path = require("path");
const extensions = require("./util")

var folderPath = "./Downloads"
let extFolderPath;


function checkFolder(extName){

    for(let keys in extensions){
        if(extensions[keys].includes(extName)){
            
          extFolderPath = `${folderPath}/${keys}`
        }
    }
    // checks if there is a folder /downloads/audio
    return fs.existsSync(extFolderPath)

}

function moveFile(filename){
    //copy file
    let sourcePath = `${folderPath}/${filename}`
    let destPath = `${extFolderPath}/${filename}`

    fs.copyFileSync(sourcePath,destPath);

    //delete the file from source
    fs.unlinkSync(sourcePath)

}

function createFolder(){
    fs.mkdirSync(extFolderPath)
}


function sortFolder(folderPath){
    let contents = fs.readdirSync(folderPath)  //has contents of download folder

    contents.forEach(content =>{
        let extName = path.extname(content);
        //console.log(extName)

        let extFolderExist = checkFolder(extName)

        if(extFolderExist){
            moveFile(content)
        }
        else{
            createFolder();
            moveFile(content)
            
        }
    })
   
}

sortFolder(folderPath);


