import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Friend from './friend';
import Life from './life';
import Totoro from './totoro';

// Display Totoro's Health

let totoro = new Totoro();
console.dir(totoro);

let totoroHealth = $('.healthAmt');
totoroHealth.text(totoro.health);

