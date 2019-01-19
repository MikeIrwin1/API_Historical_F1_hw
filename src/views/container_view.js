const PubSub = require('../helpers/pub_sub.js');
const RaceView = require('./race_view.js');
const RaceDetail = require('./race_detail.js');

const ContainerView = function (container) {
  this.container = container;
};

ContainerView.prototype.bindEvents = function () {
  PubSub.subscribe('Formula1Stats:season-details-ready', (event) => {
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
    const raceDetailView = this.raceDetailItem(race)
    this.container.appendChild(raceView);
    // this.container.appendChild(raceDetailView);



    // raceView.addEventListener('click', (event) =>{
    //   const selectedIndex = event.target.value;
    //   debugger
    //   const raceDetail = this.raceDetailItem(race, selectedIndex);
    // });
  })
};

ContainerView.prototype.raceListItem = function (race) {
  const raceItem = new RaceView();
  return raceItem.createRaceItem(race);
};


ContainerView.prototype.raceDetailItem = function (race, index) {
  const raceDetail = new RaceDetail(race, index);
  return raceDetail.bindEvents();
};
module.exports = ContainerView;
