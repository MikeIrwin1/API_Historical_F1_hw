const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Formula1Stats = function () {
  this.data;
  this.season;
  this.seasonDetail;
};

Formula1Stats.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:Season-selected', (event) => {
    const selectedSeason = event.detail;
    this.selectedSeasonRaces(selectedSeason);
    this.selectedSeasonDetails(selectedSeason);
  })
  this.getData();
};

Formula1Stats.prototype.getData = function () {
  const url = 'http://ergast.com/api/f1.json?limit=997'
  const requestHelper = new RequestHelper(url);
  const myPromise = requestHelper.get();
  myPromise.then((data) => {
    this.data = this.handleRaceData(data);
    PubSub.publish('Formula1Stats:race-data-ready', this.data);
  })
};

Formula1Stats.prototype.handleRaceData = function (tabledata) {
  return tabledata.MRData.RaceTable.Races;
};

Formula1Stats.prototype.selectedSeasonRaces = function (selectedSeason) {
  this.season = this.data.filter((race) => {
    if (race.season === selectedSeason) {
      return race;
    };
  });
}

Formula1Stats.prototype.selectedSeasonDetails = function (selectedSeason) {
  const url = `http://ergast.com/api/f1/${selectedSeason}/results.json?limit=1000`;
  const requestHelper = new RequestHelper(url);
  const myPromise = requestHelper.get();
  myPromise.then((data) => {
    this.seasonDetail = this.handleRaceData(data);
    PubSub.publish('Formula1Stats:race-details-ready', this.seasonDetail);
    this.selectedChampionshipStandings(selectedSeason);
  })
};

Formula1Stats.prototype.selectedChampionshipStandings = function (selectedSeason) {
  const url = `http://ergast.com/api/f1/${selectedSeason}/driverStandings.json`;
  const requestHelper = new RequestHelper(url);
  const myPromise = requestHelper.get();
  myPromise.then((data) => {
    const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    PubSub.publish('Formula1Stats:standings-ready', standings)
  })
};

module.exports = Formula1Stats;
