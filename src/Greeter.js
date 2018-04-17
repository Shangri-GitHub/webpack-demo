/**
 * Created by shangri-la on 16/04/2018.
 */


var config = require('./config.json');
module.exports = function() {
  var greet = document.createElement('h5');
  // greet.textContent = "Hi there and greetings!";
  // 加入json
  greet.textContent = config.greetText;
  return greet;
}





