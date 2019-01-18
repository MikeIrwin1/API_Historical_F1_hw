const ContainerView = require('./views/container_view.js');
const RaceView = require('./views/race_view.js');
const Formula1Stats = require('./models/formula1_stats.js')
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const selector = document.querySelector('select#season-select');
  const selectView = new SelectView(selector);
  selectView.bindEvents();

  const container = document.querySelector('#container-wrapper');
  const containerView = new ContainerView(container);
  containerView.bindEvents();

  const f1Data = new Formula1Stats();
  f1Data.bindEvents();
});
