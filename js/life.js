// This is the 'bad guy'

let Life = function() {


};


let rain = {opt: 'rain', pow: 20 };
let time = {opt: 'running late', pow: 20};
let sleepy = {opt: 'sleepy', pow: 20};
let hungry = {opt: 'hungry', pow: 10};
let sad = {opt: 'lonely', pow: 30};
let night = {opt: 'darkness', pow: 20};


Life.prototype.meanOptions = [rain, time, sleepy, hungry, sad, night];

export default Life;