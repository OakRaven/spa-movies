define(['models/list'], function(listModel){
  console.log('** loading services/data');

  var movies = new kendo.data.DataSource({
    schema: { model: {} },
    transport: { read: { url: window.moviePath, dataType: 'json' } }
  });

  movies.bind('change', function(e){
    listModel.set('movies', movies.data());
  });

  return {
    movies: movies
  };
});