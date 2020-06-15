'use strict';


var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var WIZARD_NAMES = ['ИванХуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomNumber = function(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return randomNumber;
  }

var wizards = [
  {
    name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomNumber(WIZARD_SECOND_NAMES)],
    coatColor: coatColors[getRandomNumber(coatColors)],
    eyesColor: eyesColors[getRandomNumber(eyesColors)]
  },
  {
    name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomNumber(WIZARD_SECOND_NAMES)],
    coatColor: coatColors[getRandomNumber(coatColors)],
    eyesColor: eyesColors[getRandomNumber(eyesColors)]
  },
  {
    name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomNumber(WIZARD_SECOND_NAMES)],
    coatColor: coatColors[getRandomNumber(coatColors)],
    eyesColor: eyesColors[getRandomNumber(eyesColors)]
  },
  {
    name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomNumber(WIZARD_SECOND_NAMES)],
    coatColor: coatColors[getRandomNumber(coatColors)],
    eyesColor: eyesColors[getRandomNumber(eyesColors)]
  }
];

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
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

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
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
  wizardCoat.style.fill = coatColors[getRandomNumber(coatColors)];
  coatColorInput.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColors[getRandomNumber(eyesColors)];
  eyesColorInput.value = wizardEyes.style.fill;
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.backgroundColor = fireballColors[getRandomNumber(fireballColors)];
  fireballColorInput.value = fireballColors[getRandomNumber(fireballColors)];
});


