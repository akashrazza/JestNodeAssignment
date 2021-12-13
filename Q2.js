var event = require('events');
var eventEmitter  =new event.EventEmitter();

//Listner 1
var listner1 = function listner1(){
    console.log("This is Listner1");
}

//Listner 2
var listner2 = function listner2(){
    console.log("This is Listner2");
}
//Adding Event to Listners
eventEmitter.on('myevent',listner1);
eventEmitter.on('myevent',listner2);

//Event emit
eventEmitter.emit('myevent');

//Get All Names of Event
console.log(eventEmitter.eventNames());
