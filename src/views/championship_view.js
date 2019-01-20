const ChampionshipView = function () {

};

ChampionshipView.prototype.createChampionshipStandings = function (standings) {
  const standingsElement = document.createElement('div');
  standingsElement.classList.add('championship-wrapper');
  const heading = document.createElement('h2');
  heading.textContent = 'Drivers Championship';
  standingsElement.appendChild(heading);
  const champTable = this.createChampionshipTable(standings);

  return standingsElement;
};

ChampionshipView.prototype.createChampionshipTable = function (standings) {
  const table = document.createElement('table');
  const headingRow = table.insertRow(-1);
  const driverHeading = document.createElement('th');
  const constructorHeading = document.createElement('th');
  const pointsHeading = document.createElement('th');
  driverHeading.innerHTML = 'Driver';
  constructorHeading.innerHTML = 'Constructor';
  pointsHeading.innerHTML = 'Points';
  headingRow.appendChild(driverHeading);
  headingRow.appendChild(constructorHeading);
  headingRow.appendChild(pointsHeading);

  standings.forEach((standing) => {
    const newRow = table.insertRow(-1);
    const name = table.insertCell(0);
    name.innerHTML = `${standing.Driver.givenName} ${standing.Drive.familyName}`;
    const constructor = table.insertCell(1);
    constructor.innerHTML = `${standing.constructors[0].name}`;
    const points = table.insertCell(2);
    points.innerHTML = `${standing.points}`;
  })

  return table;
};
module.exports = ChampionshipView;
