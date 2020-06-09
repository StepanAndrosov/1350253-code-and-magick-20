'use strict';

var WIZARD_NAMES = ['ИванХуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green']

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



