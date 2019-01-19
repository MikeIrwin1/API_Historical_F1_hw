const PubSub = require('../helpers/pub_sub.js');
const RaceDetail = require('./race_detail.js');


const RaceView = function () {

};

RaceView.prototype.createRaceItem = function (race) {
  const raceItem = document.createElement('button');
  raceItem.classList.add('raceDetail');
  raceItem.value = `${race.round - 1}`
  raceItem.textContent = `Round ${race.round}: ${race.raceName} - ${race.Circuit.circuitName}`;
  return raceItem;
};

module.exports = RaceView;
