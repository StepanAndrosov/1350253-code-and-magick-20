'use strict';

(function () {

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

    if (valueLength < window.render.MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (window.render.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.render.MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - window.render.MAX_NAME_LENGTH) + ' симв.');
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
    wizardCoat.style.fill = window.render.COAT_COLORS[window.util.getRandomNumber(window.render.COAT_COLORS)];
    coatColorInput.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.render.EYES_COLORS[window.util.getRandomNumber(window.render.EYES_COLORS)];
    eyesColorInput.value = wizardEyes.style.fill;
  });

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = window.render.FIREBALL_COLORS[window.util.getRandomNumber(window.render.FIREBALL_COLORS)];
    fireballColorInput.value = window.render.FIREBALL_COLORS[window.util.getRandomNumber(window.render.FIREBALL_COLORS)];
  });
})();
