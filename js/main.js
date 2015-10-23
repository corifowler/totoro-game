import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Friend from './friend';
import Life from './life';
import Totoro from './totoro';

// Display Totoro's Health

let totoro = new Totoro();
console.dir(totoro);

let friend = new Friend();
console.dir(friend);

let enemy = new Life();
console.dir(enemy);



let makeFriend = $('.make-friend');

makeFriend.on('click', function() {

  let bestFriend = new Friend();
  totoro.health = 0;
  console.log('a new friend has been created');

  let totoroHealth = $('.healthAmt');
  totoroHealth.text(totoro.health);

  $('.friend').fadeOut(1000);
  $('.life').fadeOut(1000);
  $('.friend-arena').fadeIn(3000);
  $('.computer-enemy').fadeIn(3000);

  bestFriend.response();

});

let makeEnemy = $('.make-enemy');

makeEnemy.on('click', function() {

  let enemy = new Life();
  totoro.health = 100;
  console.log('you have chosen the dark path!');

  let totoroHealth = $('.healthAmt');
  totoroHealth.text(totoro.health);

  $('.life').fadeOut(1000);
  $('.friend').fadeOut(1000);
  $('.enemy-arena').fadeIn(3000);
  $('.computer-friend').fadeIn(3000);

  enemy.response();

});

