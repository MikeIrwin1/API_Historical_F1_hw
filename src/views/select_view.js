const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Formula1Stats:race-data-ready', (event) =>{
    const allRaces = event.detail;
    const seasons = allRaces.map((race) => {return race.season})
    const uniqueSeasons = [...new Set(seasons)];
    this.populate(uniqueSeasons);
  })
  this.element.addEventListener('change', (event) =>{
    const selectedSeason = event.target.value;
    PubSub.publish('SelectView:Season-selected', selectedSeason);
  })
};

SelectView.prototype.populate = function (allSeasonsData) {
  allSeasonsData.forEach((season) =>{
    const option = document.createElement("option");
    option.textContent = season;
    option.value = season;
    this.element.appendChild(option);
  })
};

module.exports = SelectView;
