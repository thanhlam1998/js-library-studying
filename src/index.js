'use strict'

var uniqueRandomArray = require("unique-random-array")
var starWarsNames = require("./starwar-names.json")

module.exports {
	all: starWarsNames,
	random: uniqueRandomArray(starWarsNames)
}