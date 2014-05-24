'use strict'
var restaurant = require('../data/restaurants.json');
var underscore = require('underscore');

function lunchDraw(){
  var random = (Math.floor(Math.random() * restaurant.length));
  alert(restaurant[random].name);
}
  
function init(){
  $('#lunch_draw').click(function(){
    lunchDraw();
  });
}

$(document).ready(init);