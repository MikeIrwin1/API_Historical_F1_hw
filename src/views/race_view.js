const PubSub = require('../helpers/pub_sub.js');

const RaceView = function () {

};

RaceView.prototype.createRaceItem = function (race) {
  const raceDetail = document.createElement('div')
  raceDetail.classList.add('raceDetail')

  const raceInfo = document.createElement('p');
  raceInfo.textContent = `${race.season}, ${race.round}, ${race.raceName}`;
  raceDetail.appendChild(raceInfo);

  return raceDetail

};
module.exports = RaceView;
