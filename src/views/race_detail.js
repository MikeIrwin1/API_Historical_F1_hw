const PubSub = require('../helpers/pub_sub.js');

const RaceDetail = function (race) {
  this.race = race;
};

RaceDetail.prototype.bindEvents = function () {
  PubSub.subscribe('Formula1Stats:race-details-ready', (event) => {
    
  })
};

RaceDetail.prototype.createRaceDetail = function () {
  // PubSub.subscribe('Formula1Stats:race-details-ready', (event) => {
  //   console.log(event)
  // });
};

module.exports = RaceDetail;
