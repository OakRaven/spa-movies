define(['models/list'], function(listModel){
  console.log('** loading services/data');

  var movieContext = new kendo.data.DataSource({
    schema: { model: { id: "id" } },
    transport: { read: { url: window.moviePath, dataType: 'json' } }
  });

  movieContext.bind('change', function(e){
    listModel.set('movies', movieContext.data());
  });

  return {
    movieContext: movieContext
  };
});