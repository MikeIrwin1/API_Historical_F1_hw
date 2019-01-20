const PubSub = require('../helpers/pub_sub.js');
const RaceView = require('./race_view.js');
const RaceDetail = require('./race_detail.js');
const ChampionshipView = require('./championship_view.js');

const ContainerView = function (container) {
  this.container = container;
};

ContainerView.prototype.bindEvents = function () {
  PubSub.subscribe('Formula1Stats:race-details-ready', (event) => {
    this.clear();
    this.renderRaceListView(event.detail);
  });
  PubSub.subscribe('Formula1Stats:standings-ready', (event) => {
    this.renderChampionshipList(event.detail);
  });
};

ContainerView.prototype.clear = function () {
  this.container.innerHTML = '';
};

ContainerView.prototype.renderRaceListView = function (raceArray) {
  const races = document.createElement('div');
  races.classList.add('seasons-races');
  const heading = document.createElement('h2');
  heading.textContent = 'Seasons Races';
  races.appendChild(heading);

  raceArray.forEach((race) => {
    const raceView = this.raceListItem(race);
    const raceDetailView = this.raceDetailItem(race);
    races.appendChild(raceView);
    races.appendChild(raceDetailView);
  });
  this.container.appendChild(races);
  const collapse = document.getElementsByClassName('race')
  for (let i=0; i<collapse.length; i++) {
    collapse[i].addEventListener('click', (event) => {
      let content = event.target.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      }
      else {
        content.style.display = "block";
      }
    })
  }
};

ContainerView.prototype.raceListItem = function (race) {
  const raceItem = new RaceView();
  return raceItem.createRaceItem(race);
};


ContainerView.prototype.raceDetailItem = function (race) {
  const raceDetail = new RaceDetail();
  return raceDetail.createRaceDetail(race);
};

ContainerView.prototype.renderChampionshipList = function (standingsArray) {
  const championshipList = new ChampionshipView();
  const list =  championshipList.createChampionshipStandings(standingsArray);
  this.container.appendChild(list);
};
module.exports = ContainerView;
