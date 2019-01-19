const PubSub = require('../helpers/pub_sub.js');
const RaceView = require('./race_view.js');

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
    this.container.appendChild(raceView);
  })
};

ContainerView.prototype.raceListItem = function (race) {
  const raceItem = new RaceView();
  return raceItem.createRaceItem(race);
};

module.exports = ContainerView;
