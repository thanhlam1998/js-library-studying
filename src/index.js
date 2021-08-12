const uniqueRandomArray = require("unique-random-array");
const starWarsNames = require("./starwar-names.json");

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};
