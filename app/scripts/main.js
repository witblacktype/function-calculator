'use strict';
/*
  functionArray used for testing purposes
*/
var functionArray = [];
var evaluate = {
  add: function(input1, input2){
    return input1 + input2;
  },
  subtract: function(input1, input2){
    return input1 - input2;
  },
  multiply: function(input1, input2){
    return input1 * input2;
  },
  divide: function(input1, input2){
    return input1 / input2;
  },
  includeFunction: function(anyArray, anyFunction){
    var arr = anyArray;
    var fn = anyFunction;
    arr.push(fn);
    functionArray = arr;
    return arr;
  }
};
console.log('module test result: ' + evaluate.add(2,4));
