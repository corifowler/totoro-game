import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Friend from './friend';
import Life from './life';
import Totoro from './totoro';

// Pre-Define Variables

let totoro = new Totoro();

let buttonId;
let btnId;
let power;
let specialId;

// Playing Game as a Friend

let makeFriend = $('.make-friend');

makeFriend.on('click', function() {

  let bestFriend = new Friend();
  let computer = new Life();
  totoro.health = 0;
  console.log('a new friend has been created');

  let totoroHealth = $('.healthAmt');
  totoroHealth.text(totoro.health);

  $('.friend').fadeOut(1000);
  $('.life').fadeOut(1000);
  $('.totoro').fadeIn(3000);
  $('.friend-arena').fadeIn(3000);
  $('.computer-enemy').fadeIn(3000);

  bestFriend.response();
  specialId = _.random(0,5);
  computer.computer(specialId);

  let friendPick = $('.friend-choices');

  // Playing as Friend -picking answers

  friendPick.on('click', function(button) {

    buttonId = button.target.id;

    console.log(buttonId);

    power = Friend.prototype.battleOptions[buttonId].pow;

    console.log(power);

    if (Number(buttonId) === Number(specialId)) {
      console.log('it matches');
      totoro.health = totoro.health + Number(power);
      totoroHealth.text(totoro.health);
    } else {
      console.log('wrong choice');
      totoro.health = totoro.health - Number(power);
      totoroHealth.text(totoro.health);
    }

    if (totoro.health >= 100) {
      console.log('you are a good friend');
    } else {
      specialId = _.random(0,5);
      computer.computer(specialId);
    }


  });

});



// Playing Game as Enemy/Life

let makeEnemy = $('.make-enemy');

makeEnemy.on('click', function() {

  let enemy = new Life();
  let computer = new Friend();
  totoro.health = 100;
  console.log('you have chosen the dark path!');

  let totoroHealth = $('.healthAmt');
  totoroHealth.text(totoro.health);

  $('.life').fadeOut(1000);
  $('.friend').fadeOut(1000);
  $('.totoro').fadeIn(3000);
  $('.enemy-arena').fadeIn(3000);
  $('.computer-friend').fadeIn(3000);

  enemy.response();

  let enemyPick = $('.life-choices');

  // Playing as Enemy - picking choices

  enemyPick.on('click', function(btn) {

    specialId = _.random(0,5);
    console.log(specialId);
    computer.computer(specialId);
    btnId = btn.target.id;

    console.log(btnId);

    power = Life.prototype.meanOptions[btnId].pow;

    console.log(power);

    if (Number(btnId) === Number(specialId)) {
      console.log('it matches');
      totoro.health = totoro.health - Number(power);
    } else {
      console.log('wrong choice');
      totoro.health = totoro.health + Number(power);
    }

    if (totoro.health <= 0) {
      console.log('you destroyed totoro');
    } else {
      let totoroHealth = $('.healthAmt');
      totoroHealth.text(totoro.health);
    }


  });
  
});



