define(['models/list'], function(listModel){
  console.log('** loading services/data');

  var movieContext = new kendo.data.DataSource({
    schema: { model: { id: "id" } },
    transport: { read: { url: window.moviePath, dataType: 'json' } },
    sort: { field: 'title', dir: 'asc' }
  });

  movieContext.bind('change', function(e){
    listModel.set('movies', movieContext.view());
  });

  return {
    movieContext: movieContext
  };
});