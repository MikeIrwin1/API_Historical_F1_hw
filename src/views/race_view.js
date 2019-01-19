const PubSub = require('../helpers/pub_sub.js');
const RaceDetail = require('./race_detail.js');

const RaceView = function () {

};

RaceView.prototype.createRaceItem = function (race) {
  const raceItem = document.createElement('button');
  raceItem.classList.add('raceDetail');
  raceItem.textContent = `Round: ${race.round} - ${race.raceName} Circuit: ${race.Circuit.circuitName}`;

  const raceDetail = new RaceDetail(race);
  
  return raceItem;

};
module.exports = RaceView;
