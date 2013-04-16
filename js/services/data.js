// dataservice.js

define(function(){
  var movies = new kendo.data.DataSource({
    schema: { model: {} },
    transport: { read: { url: '/movies.json', dataType: 'json' } }
  });

  return {
    movies: movies
  };
});