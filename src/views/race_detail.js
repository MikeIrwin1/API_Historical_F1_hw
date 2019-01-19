const PubSub = require('../helpers/pub_sub.js');

const RaceDetail = function () {
};

RaceDetail.prototype.createRaceDetail = function (race) {
  const raceDetail = document.createElement('div');
  raceDetail.classList.add('results');
  const heading = this.createHeading();
  raceDetail.appendChild(heading);

  const table = this.createTable(race);
  raceDetail.appendChild(table);
  
  return raceDetail

};

RaceDetail.prototype.createHeading = function () {
  const results = document.createElement('h4');
  results.textContent = 'Results';
  return results;
};

RaceDetail.prototype.createTable = function (race) {
  const newTable = document.createElement('table');

  for (let i=0; i<3; i++) {
    const newRow = newTable.insertRow(-1);
    newRow.textContent = `${race.Results[i].Driver.givenName} ${race.Results[i].Driver.familyName}`;
  }
  return newTable;
};

module.exports = RaceDetail;
