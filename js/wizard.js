'use strict';

(function () {
  var WizardColor = {
    COAT: [
      'rgb(146, 100, 161)',
      'rgb(215, 210, 55)',
      'rgb(241, 43, 107)',
      'rgb(101, 137, 164)',
      'rgb(0, 0, 0)',
      'rgb(215, 210, 55)',
      'rgb(56, 159, 117)',
      'rgb(241, 43, 107)'
    ],
    EYES: [
      'red',
      'orange',
      'yellow',
      'green',
      'lightblue',
      'blue',
      'purple'
    ],
    FIREBALL: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
  };
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var setupAppearance = document.querySelector('.setup-wizard-appearance');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardCoat = setupAppearance.querySelector('.wizard-coat');
  var wizardEyes = setupAppearance.querySelector('.wizard-eyes');
  var coatColorInput = setupAppearance.querySelector('input');
  var eyesColorInput = setupAppearance.querySelector('input:nth-of-type(2)');
  var fireballColorInput = setupFireballWrap.querySelector('input');

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomNumber(WizardColor.COAT);
    wizardCoat.style.fill = newColor;
    coatColorInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomNumber(WizardColor.EYES);
    wizardEyes.style.fill = newColor;
    eyesColorInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  setupFireballWrap.addEventListener('click', function () {
    var newColor = window.util.getRandomNumber(WizardColor.FIREBALL);
    setupFireballWrap.style.backgroundColor = newColor;
    fireballColorInput.value = newColor;
  });

  window.wizard = {
    wizard: wizard,
  };


})();
