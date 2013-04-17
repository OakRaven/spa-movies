define(['services/router', 'models/detail'], function(router, detailModel){
  console.log('** loading models/list');

  var listModel = kendo.observable({
    movies: [],

    genre: function(item){
      return item.genres.join(', ');
    },

    showTitle: function(e){
      e.preventDefault();
      var movie = e.data;
      detailModel.set('movie', movie);
      console.log('[Navigating to ' + movie.id + ']');
      router.navigate('/movie/' + movie.id);
    }
  });

  return listModel;
});