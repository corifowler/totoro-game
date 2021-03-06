import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// This is the 'good guy'

// let specialId;

let Friend = function() {

  this.response = function() { 

    let template = ` 
        <button id="0">${ Friend.prototype.battleOptions[0].opt }</button>
        <button id="1">${ Friend.prototype.battleOptions[1].opt }</button>
        <button id="2">${ Friend.prototype.battleOptions[2].opt }</button>
        <button id="3">${ Friend.prototype.battleOptions[3].opt }</button>
        <button id="4">${ Friend.prototype.battleOptions[4].opt }</button>
        <button id="5">${ Friend.prototype.battleOptions[5].opt }</button>`;

    $('.friend-choices').append(template);


  };

  this.computer = function(numPick) {

    let template = `
      <div class="ch">${ Friend.prototype.battleOptions[numPick].opt}</div>`;

    $('.comp-answer').html(template);
  };

};


let leaf = {id: 0, opt: 'Give Totoro a leaf', pow: 20 };
let cat = {id: 1, opt: 'Ride the cat bus. Meow!', pow: 20};
let forest = {id: 2, opt: 'Find a safe place in the forest', pow: 20};
let food = {id: 3, opt: 'Share a yummy snack', pow: 10};
let friend = {id: 4, opt: 'Be friendly', pow: 30};
let perch = {id: 5, opt: 'Find a perch', pow: 20};


Friend.prototype.battleOptions = [leaf, cat, forest, food, friend, perch];


console.dir(Friend.prototype.battleOptions);

export default Friend;

