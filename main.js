import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\Asus\\Desktop\\sigma Node\\Vid_89 (exercise cluster clear)"

let file=await fs.readdir(basepath)
// console.log(file)

for (const item of file) {
    let ext=item.split(".")[item.split(".").length-1]
    if(ext!="js" && ext!="json" && item.split(".").length>1){
    if(fsn.existsSync(ext)){
        // move extension files to directory
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }
    else{
        fs.mkdir(ext)
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }
}
}