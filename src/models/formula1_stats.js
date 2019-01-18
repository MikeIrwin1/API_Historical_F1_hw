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
  requestHelper.get((data) => {
    this.data = data.MRData.RaceTable.Races;
    console.log(this.data);
  })
};

module.exports = Formula1Stats;
