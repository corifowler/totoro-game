import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// This is the 'good guy'

let Friend = function() {

  this.response = function() { 

    let template = ` 
        <button>${ Friend.prototype.battleOptions[0].opt }</button>
        <button>${ Friend.prototype.battleOptions[1].opt }</button>
        <button>${ Friend.prototype.battleOptions[2].opt }</button>
        <button>${ Friend.prototype.battleOptions[3].opt }</button>
        <button>${ Friend.prototype.battleOptions[4].opt }</button>
        <button>${ Friend.prototype.battleOptions[5].opt }</button>`;

    $('.friend-choices').append(template);

  };

  this.computer = function() {

    let numPick = _.random(0,5);

    console.log(Friend.prototype.battleOptions[numPick]);

    let template = `
      <div>${ Friend.prototype.battleOptions[numPick].opt}</div>`;

    $('.computer-friend').append(template);

  };

};


let leaf = {opt: 'leaf', pow: 20 };
let cat = {opt: 'cat bus', pow: 20};
let forest = {opt: 'forest', pow: 20};
let food = {opt: 'share food', pow: 10};
let friend = {opt: 'be friendly', pow: 30};
let perch = {opt: 'find perch', pow: 20};


Friend.prototype.battleOptions = [leaf, cat, forest, food, friend, perch];


console.dir(Friend.prototype.battleOptions);

export default Friend;

