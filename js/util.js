'use strict';

(function () {

  var enterButton = 'Enter';
  var escapeButton = 'Escape';

  var isEnterEvent = function (evt) {
    return evt.key === enterButton;
  };

  var isEscEvent = function (evt) {
    return evt.key === escapeButton;
  };

  window.util = {
    getRandomNumber: function (array) {
      var randomNumber = Math.floor(Math.random() * array.length);
      return randomNumber;
    },

    isEnterEvent: isEnterEvent,
    isEscEvent: isEscEvent,
  };

})();
