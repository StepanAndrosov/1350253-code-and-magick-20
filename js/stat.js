'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 110;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 50;
  var TEXT_HEIGHT = 16;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + TEXT_HEIGHT);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + FONT_GAP + ((BAR_WIDTH + FONT_GAP) * i), CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + ((BAR_WIDTH + FONT_GAP) * i), (CLOUD_HEIGHT - CLOUD_Y - FONT_GAP) - ((BAR_HEIGHT * times[i]) / maxTime));

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240,  ' + (((BAR_HEIGHT * times[i]) / maxTime) * 100 / BAR_HEIGHT) + '%, 30%)';
      }

      ctx.fillRect(CLOUD_X + FONT_GAP + ((BAR_WIDTH + FONT_GAP) * i), (CLOUD_HEIGHT - CLOUD_Y - GAP) - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
  };
})();
