'use strict';

(function () {

  var SetupDisplay = {
    TOP: 80,
    LEFT: document.documentElement.clientWidth / 2,
  };

  var NameLength = {
    MIN: 2,
    MAX: 25,
  };

  var WizardColor = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
  }

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
console.log(setup.clientWidth);
console.log(document.documentElement.clientWidth);

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    console.log('openPopTop = ' + setup.style.top);
    console.log('openPopLeft = ' + setup.style.left);
  };

  var closePopup = function () {
    console.log('openPopTop = ' + setup.style.top);
    console.log('openPopLeft = ' + setup.style.left);
    setup.classList.add('hidden');
    setup.style.top = SetupDisplay.TOP + 'px';
    setup.style.left = SetupDisplay.LEFT + 'px';
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

    if (valueLength < NameLength.MIN) {
      userNameInput.setCustomValidity('Ещё ' + (NameLength.MIN - valueLength) + ' симв.');
    } else if (valueLength > NameLength.MAX) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - NameLength.MAX) + ' симв.');
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
    wizardCoat.style.fill = WizardColor.COAT[window.util.getRandomNumber(WizardColor.COAT)];
    coatColorInput.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = WizardColor.EYES[window.util.getRandomNumber(WizardColor.EYES)];
    eyesColorInput.value = wizardEyes.style.fill;
  });

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = WizardColor.FIREBALL[window.util.getRandomNumber(WizardColor.FIREBALL)];
    fireballColorInput.value = WizardColor.FIREBALL[window.util.getRandomNumber(WizardColor.FIREBALL)];
  });

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();

