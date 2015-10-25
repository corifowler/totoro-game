import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// This is the 'bad guy'

let specialId;

let Life = function() {

  this.response = function() { 

    let template = ` 
        <button id="0">${ Life.prototype.meanOptions[0].opt }</button>
        <button id="1">${ Life.prototype.meanOptions[1].opt }</button>
        <button id="2">${ Life.prototype.meanOptions[2].opt }</button>
        <button id="3">${ Life.prototype.meanOptions[3].opt }</button>
        <button id="4">${ Life.prototype.meanOptions[4].opt }</button>
        <button id="5">${ Life.prototype.meanOptions[5].opt }</button>`;

    $('.life-choices').append(template);

  };

  this.computer = function(numPick) {

    let template = `
      <div class="ch">${ Life.prototype.meanOptions[numPick].opt}</div>`;

    $('.comp-answer-2').html(template);

    return Life.prototype.meanOptoins[numPick].opt;

  };

};


let rain = {id: 0, opt: 'It is raining', pow: 20 };
let time = {id: 1, opt: 'Totoro is running late', pow: 20};
let sleepy = {id: 2,opt: 'Totoro is getting sleepy', pow: 20};
let hungry = {id: 3, opt: 'Totoro is feeling hungry', pow: 10};
let sad = {id: 4, opt: 'Totoro is feeling lonely', pow: 30};
let night = {id: 5, opt: 'It is getting dark outside', pow: 20};


Life.prototype.meanOptions = [rain, time, sleepy, hungry, sad, night];

export default Life;