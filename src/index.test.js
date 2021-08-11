"use strict";

var expect = require("chai").expect;
var starWarsNames = require(".");

describe("starwars-name", function () {
  it("should have a list of all available name", function () {
    expect(starWarsNames.all).to.satisfy(isArrayOfString);
  });
  it("should allow me to get a random name from the list", function () {
    expect(starWarsNames.random()).to.satisfy(isIncludeIn(starWarsNames.all));
  });
});

function isArrayOfString(array) {
  return array.every(function (i) {
    return typeof i === "string";
  });
}

function isIncludeIn(array) {
  return function (item) {
    return array.includes(item);
  };
}
