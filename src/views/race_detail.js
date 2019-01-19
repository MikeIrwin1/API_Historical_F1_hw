const PubSub = require('../helpers/pub_sub.js');

const RaceDetail = function () {
};

RaceDetail.prototype.createRaceDetail = function (race) {
  const raceDetail = document.createElement('div');
  raceDetail.classList.add('results');
  const heading = this.createHeading();
  raceDetail.appendChild(heading);

  const table = this.createTable(race);
  // raceDetail.textContent = `${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`;
  // const results = race.Results;
  return raceDetail

};

RaceDetail.prototype.createHeading = function () {
  const results = document.createElement('h4');
  results.textContent = 'Results';
  return results;
};

RaceDetail.prototype.createTable = function (race) {
  const table = document.createElement('table')
};
module.exports = RaceDetail;
