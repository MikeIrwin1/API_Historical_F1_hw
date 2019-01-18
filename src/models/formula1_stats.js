const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Formula1Stats = function () {
  this.data;
  this.season;
};

Formula1Stats.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:Season-selected', (event) => {
    const selectedSeason = event.detail;
    this.selectedSeasonData(selectedSeason);
    PubSub.publish('Formula1Stats:season-races-ready', this.season);
  })
  this.getData();
};

Formula1Stats.prototype.getData = function () {
  const url = 'http://ergast.com/api/f1.json?limit=997'
  const requestHelper = new RequestHelper(url);
  const myPromise = requestHelper.get();
  myPromise.then((data) => {
    this.handleRaceData(data);
    PubSub.publish('Formula1Stats:race-data-ready', this.data);
  })
};

Formula1Stats.prototype.handleRaceData = function (tabledata) {
  return this.data = tabledata.MRData.RaceTable.Races;
};

Formula1Stats.prototype.selectedSeasonData = function (selectedSeason) {
  this.season = this.data.filter((race) => {
    if (race.season === selectedSeason) {
      return race;
    };
  });
}

module.exports = Formula1Stats;
