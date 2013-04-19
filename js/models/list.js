define([
  'services/router',
  'models/detail'],
  function(routeSerivce, detailModel){

  console.log('** loading models/list');

  return kendo.observable({
    movies: [],

    genre: function(item){
      return item.genres.join(', ');
    },

    showTitle: function(e){
      e.preventDefault();
      var movie = e.data;
      detailModel.set('movie', movie);
      console.log('[Navigating to ' + movie.id + ']');
      routeSerivce.navigate('/movie/' + movie.id);
    }
  });

});