'use strict'
var restaurant = require('../data/restaurants.json');
var underscore = require('underscore');

function lunchDraw(){
  var random = (Math.floor(Math.random() * restaurant.length));
  alert(restaurant[random].name);
}

function showForm(){
  $('#form_add_rest').removeClass('hidden');
}
  
function init(){
  $('#lunch_draw').click(lunchDraw);
  $('#add_restaurant').click(showForm);
}

$(document).ready(init);