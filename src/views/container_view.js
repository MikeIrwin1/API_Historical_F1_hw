const PubSub = require('../helpers/pub_sub.js');
const RaceView = require('./race_view.js');
const RaceDetail = require('./race_detail.js');

const ContainerView = function (container) {
  this.container = container;
};

ContainerView.prototype.bindEvents = function () {
  PubSub.subscribe('Formula1Stats:race-details-ready', (event) => {
    this.clear();
    this.renderRaceListView(event.detail);
  })
};

ContainerView.prototype.clear = function () {
  this.container.innerHTML = '';
};

ContainerView.prototype.renderRaceListView = function (raceArray) {
  raceArray.forEach((race) => {
    const raceView = this.raceListItem(race);
    const raceDetailView = this.raceDetailItem(race);
    this.container.appendChild(raceView);
    this.container.appendChild(raceDetailView);
  });
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
module.exports = ContainerView;
