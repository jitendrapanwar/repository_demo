var dataNames = require('./data.json')
var uniqueRandomArray = require('unique-random-array')

module.exports = {

	all : dataNames,
	random : uniqueRandomArray(dataNames)
}