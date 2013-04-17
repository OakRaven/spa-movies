define([
  'services/router',
  'services/data',
  'layouts/default',
  'views/list',
  'views/detail',
  'models/detail'],

  function(routeSerivce, dataService, defaultLayout, listView, detailView, detailModel){

  console.log('[Started]');

  routeSerivce.router.route('/', function(){
    console.log('[Navigating to \'/\']');
    App.Ui.hide_window('movieDetails');
    defaultLayout.showIn('#list', listView);
  });

  routeSerivce.router.route('/movie/:id', function(id){
    defaultLayout.showIn('#list', listView);

    var movie = dataService.movieContext.get(id);
    if(movie) {
      detailModel.setCurrent(movie);
      defaultLayout.showIn('#movieDetails', detailView);

      App.Ui.center_window('movieDetails');
      App.Ui.show_window('movieDetails');

      console.log('[Displaying title: ' + id + ']');
    }
  });

  routeSerivce.router.start();
  dataService.movieContext.read();

});