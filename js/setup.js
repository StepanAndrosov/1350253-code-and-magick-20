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

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
