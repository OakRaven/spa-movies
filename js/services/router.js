define([
  'services/data',
  'layouts/default',
  'views/list',
  'views/detail',
  'models/detail'],
  function(dataService, defaultLayout, listView, detailView, detailModel){
    console.log('** loading services/router');

  var router = new kendo.Router({
    init: function() {
      defaultLayout.render('#application');
      console.log('[Router initialized]');
    }
  });

  router.route('/', function(){
    console.log('[Navigating to \'/\']');
    App.Ui.hide_window('movieDetails');
    defaultLayout.showIn('#list', listView);
  });

  router.route('/movie/:id', function(id){
    defaultLayout.showIn('#list', listView);

    dataService.movies.fetch(function(e){
      detailModel.setCurrent(id);
      defaultLayout.showIn('#movieDetails', detailView);

      App.Ui.center_window('movieDetails');
      App.Ui.show_window('movieDetails');

      console.log('[Displaying title: ' + id + ']');
    });
  });

  return router;
});