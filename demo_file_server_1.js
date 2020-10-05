var fs=require("fs");

fs.appendFile('file/appendFile.txt',"hello content",function(err){
    if (err) throw err;
    console.log("saved!");
});



fs.open('open.txt',"w",function(err,file){
    if (err) throw err;
    
    console.log("saved!");
});
    
    

// fs.writeFile('file/writeFile.txt',"hello content",function(err){
//     if (err) throw err;
//     console.log("saved!");
// });
    