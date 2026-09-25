const events = require('events')

//class - eventEmitter
const evnt = new events.EventEmitter()


//create the event using on() method
// 1st arg - name of the event
// 2nd arg - function to do the logic while calling the event

evnt.on('onDisplay' , ()=>{
    //logic
    console.log('display event invoked');
    
})

//invoke the event
evnt.emit('onDisplay')