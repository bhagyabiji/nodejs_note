const fs = require('fs')

//rename
fs.rename('./text.txt', './sample.txt', (err)=>{
    if(err) throw err
    console.log('Rename successful');
    
})