const fs = require('fs')

//delete
fs.unlink('./sample.txt', (err)=> {
    if(err) throw err
    console.log('deleted');
    
})