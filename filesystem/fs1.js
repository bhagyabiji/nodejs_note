//import file system module
const { error, log } = require('console')
const fs = require('fs')

//to write or update
fs.writeFile('./text.txt', 'Hello Guyss', (err)=>{
    if(err) throw err
    console.log('Data written');
    
})