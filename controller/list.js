'use strict';
var _ = require('underscore');
var resList = require('../public/data/restaurants.json');

module.exports = {
	show: function (req, res, next) {
		_.each(resList, function (res) {
			res.render('list.html', resList);
		})
	}
}