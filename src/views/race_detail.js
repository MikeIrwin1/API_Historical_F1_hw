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
  results.textContent = 'Podium';
  return results;
};

RaceDetail.prototype.createTable = function (race) {
  const newTable = document.createElement('table');
  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  const constructorHeader = document.createElement('th');
  const positionHeader = document.createElement('th');
  nameHeader.textContent = 'Driver';
  constructorHeader.textContent = 'Constructor';
  positionHeader.textContent = 'Position';
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(constructorHeader);
  headerRow.appendChild(positionHeader);
  newTable.appendChild(headerRow);

  for (let i=0; i<3; i++) {
    const newRow = newTable.insertRow(-1);
    const name = newRow.insertCell(0);
    const constructor = newRow.insertCell(1);
    const position = newRow.insertCell(2);
    name.innerHTML = `${race.Results[i].Driver.givenName} ${race.Results[i].Driver.familyName}`;
    constructor.innerHTML = `${race.Results[i].Constructor.name}`
    position.innerHTML = `${race.Results[i].position}`
  }
  return newTable;
};

module.exports = RaceDetail;
