const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Formula1Stats = function () {
  this.data;
};

Formula1Stats.prototype.bindEvents = function () {
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



module.exports = Formula1Stats;
