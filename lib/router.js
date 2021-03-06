Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', function () {
  this.render('home');
});

Router.route('/art', function () {
  this.render('art');
});


Router.route('/mobileFoods', function () {
  this.render('mobileFoods');
});

Router.route('/mobileFoodsMaps', function () {
  this.render('mobileFoodsMaps');
});

Router.route('/mobileFoodsDestinations', function () {
  this.render('mobileFoodsDestinations');
});

Router.route('/artdest', function () {
  this.render('artDest');
});

Router.route('/artmap', function () {
  this.render('artmap');
});


Router.route('/bikes', function () {
  this.render('bikes');
});

Router.route('/bikeMaps', function () {
  this.render('bikeMaps');
});

Router.route('/bikeDestinations', function() {
  this.render('bikeDestinations');
})

Router.route('/foodScores', function () {
  this.render('foodScores');
});

Router.route('/foodScoresMaps', function () {
  this.render('foodScoresMaps');
});

Router.route('/movies', function() {
  this.render('moviesMap');
})

