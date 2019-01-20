const RaceView = function () {

};

RaceView.prototype.createRaceItem = function (race) {
  const raceItem = document.createElement('button');
  raceItem.classList.add('race');
  raceItem.value = `${race.round - 1}`
  raceItem.textContent = `Round ${race.round}: ${race.raceName}`;
  return raceItem;
};

module.exports = RaceView;
