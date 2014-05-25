'use strict'
//var restaurant = require('../data/restaurants.json');
//var underscore = require('underscore');
function lunchDraw(restaurant){
    return function(){
      var random = (Math.floor(Math.random() * restaurant.length));
      alert(restaurant[random].name);
    }
}

function showForm(){
  $('#form_add_rest').removeClass('hidden');
}
  
function init(){
  $.getJSON("/data/restaurants.json", function(data){
      $('#lunch_draw').click(lunchDraw(data));
      $('#add_restaurant').click(showForm);
  });
}

$(document).ready(init);