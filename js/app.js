var App = App || {};

App.Data = (function(){
  var movies = new kendo.data.DataSource({
    schema: { model: {} },
    transport: { read: { url: '/movies.json', dataType: 'json' } }
  });

  movies.bind('change', function(e){
    App.Models.listModel.set('movies', movies.data());
  });

  return {
    movies: movies
  };
})();

App.Models = (function(){
  var listModel = kendo.observable({
    movies: [],

    genre: function(item){
      return item.genres.join(', ');
    },

    showTitle: function(e){
      e.preventDefault();
      var movie = e.data;
      App.Models.detailModel.set('movie', movie);
      App.router.navigate('/movie/' + movie.id);
    }
  });

  var detailModel = kendo.observable({
    closeDetailWindow: function(e){
      e.preventDefault();
      App.router.navigate('/');
    },
    setCurrent: function(id){
      this.set('movie', App.Data.movies.get(id));
    }
  })

  return {
    listModel: listModel,
    detailModel: detailModel
  };
})();

App.Layouts = (function(){
  return {
    movieLayout: new kendo.Layout('layout-template', { model: {} })
  };
})();

App.Views = (function(){
  return {
    listView: new kendo.View('list-template', { model: App.Models.listModel }),
    detailView: new kendo.View('detail-template', { model: App.Models.detailModel })
  }
})();

App.router = new kendo.Router({
  init: function() {
    App.Layouts.movieLayout.render('#application');
    console.log('[Router initialized]');
  }
});

App.router.route('/', function(){
  App.Ui.hide_window('movieDetails');
  App.Layouts.movieLayout.showIn('#list', App.Views.listView);
  console.log('[Navigated to \'/\']');
});

App.router.route('/movie/:id', function(id){
  App.Layouts.movieLayout.showIn('#list', App.Views.listView);

  App.Data.movies.fetch(function(e){
    App.Models.detailModel.setCurrent(id);
    App.Layouts.movieLayout.showIn('#movieDetails', App.Views.detailView);

    App.Ui.center_window('movieDetails');
    App.Ui.show_window('movieDetails');

    console.log('[Displaying title: ' + id + ']');
  });
});

$(function(){
  App.Data.movies.read();
  App.router.start();
});