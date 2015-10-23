import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// This is the 'bad guy'

let Life = function() {

  this.response = function() { 

    let template = ` 
        <button>${ Life.prototype.meanOptions[0].opt }</button>
        <button>${ Life.prototype.meanOptions[1].opt }</button>
        <button>${ Life.prototype.meanOptions[2].opt }</button>
        <button>${ Life.prototype.meanOptions[3].opt }</button>
        <button>${ Life.prototype.meanOptions[4].opt }</button>
        <button>${ Life.prototype.meanOptions[5].opt }</button>`;

    $('.life-choices').append(template);

  };

  this.computer = function() {

    let numPick = _.random(0,5);

    console.log(Life.prototype.meanOptions[numPick]);

    let template = `
      <div>${ Life.prototype.meanOptions[numPick].opt}</div>`;

    $('.computer-enemy').append(template);

  };

};


let rain = {opt: 'rain', pow: 20 };
let time = {opt: 'running late', pow: 20};
let sleepy = {opt: 'sleepy', pow: 20};
let hungry = {opt: 'hungry', pow: 10};
let sad = {opt: 'lonely', pow: 30};
let night = {opt: 'darkness', pow: 20};


Life.prototype.meanOptions = [rain, time, sleepy, hungry, sad, night];

export default Life;