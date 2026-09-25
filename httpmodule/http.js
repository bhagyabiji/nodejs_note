//import 
const http  = require('http')

//create
http.createServer((req , res)=> {
    //logic
    res.write('hello world')
    res.end()
}).listen(4000,()=> {
    console.log('server running successfully');
    
})