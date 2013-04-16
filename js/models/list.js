// listModel

define(['models/detail', 'services/router'], function(detailModel, router){
  var listModel = kendo.observable({
    movies: [],

    genre: function(item){
      return item.genres.join(', ');
    },

    showTitle: function(e){
      e.preventDefault();
      var movie = e.data;
      detailModel.set('movie', movie);
      router.navigate('/movie/' + movie.id);
    }
  });

  return {
    listModel: listModel
  };
});