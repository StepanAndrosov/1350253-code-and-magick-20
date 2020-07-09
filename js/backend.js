'use strict';

(function () {

  var URL = {
    POST: 'https://javascript.pages.academy/code-and-magick',
    GET: 'https://javascript.pages.academy/code-and-magick/data',
  };

  var StatusCode = {
    OK: 200
  };

  var TIMEOUT_IN_MS = 10000;

  var myRequest = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT_IN_MS;

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  };

  var load = function (onLoad, onError) {
    var xhr = myRequest(onLoad, onError);
    xhr.open('GET', URL.GET);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = myRequest(onLoad, onError);
    xhr.open('POST', URL.POST);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save,
  };
})();
