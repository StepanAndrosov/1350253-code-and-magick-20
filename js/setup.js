'use strict';

(function () {

  var SETUP_TOP = 80;
  var SETUP_LEFT = 510;
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var onPopupEscPress = function (evt) {
    if (userNameInput === document.activeElement) {
      evt.preventDefault();
    } else if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = SETUP_TOP + 'px';
    setup.style.left = SETUP_LEFT + 'px';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function () {
    var valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  var setupAppearance = document.querySelector('.setup-wizard-appearance');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardCoat = setupAppearance.querySelector('.wizard-coat');
  var wizardEyes = setupAppearance.querySelector('.wizard-eyes');
  var coatColorInput = setupAppearance.querySelector('input');
  var eyesColorInput = setupAppearance.querySelector('input:nth-of-type(2');
  var fireballColorInput = setupFireballWrap.querySelector('input');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = COAT_COLORS[window.util.getRandomNumber(COAT_COLORS)];
    coatColorInput.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = EYES_COLORS[window.util.getRandomNumber(EYES_COLORS)];
    eyesColorInput.value = wizardEyes.style.fill;
  });

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = FIREBALL_COLORS[window.util.getRandomNumber(window.render.FIREBALL_COLORS)];
    fireballColorInput.value = FIREBALL_COLORS[window.util.getRandomNumber(FIREBALL_COLORS)];
  });

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
