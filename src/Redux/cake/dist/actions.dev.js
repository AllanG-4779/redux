"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.addCake = void 0;

// @ts-ignore
var _CakeType = require("./CakeType");

var buyCake = function buyCake() {
  return {
    type: _CakeType.BUY_CAKE
  };
};

var addCake = function addCake(number) {
  return {
    type: _CakeType.ADD_CAKE,
    payload: number
  };
};

exports.addCake = addCake;
var _default = buyCake;
exports.default = _default;