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

//Add Event and Listners
eventEmitter.addListener('myevent',listner1);
eventEmitter.addListener('myevent',listner2);

//Event Emit
eventEmitter.emit('myevent');

//Get Count of All Event
console.log("The total listners in myevent : ",eventEmitter.listenerCount('myevent'));

//Remove Listners
eventEmitter.removeListener('myevent',listner1);

//Get Listner Count
console.log("The total listners after removing in myevent : ",eventEmitter.listenerCount('myevent'));
