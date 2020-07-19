'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var render = function (wizards) {
    var fragment = document.createDocumentFragment();
    var takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : wizards.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    render: render,
  };
})();
