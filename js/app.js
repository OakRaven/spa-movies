var movies = new kendo.data.DataSource({
  schema: { model: {} },
  transport: { read: { url: '/~mike/movies/movies.json', dataType: 'json' } }
});

movies.bind('change', function(e){
  listModel.set('movies', movies.data());
});

var listModel = kendo.observable({
  movies: [],
  genre: function(item){
    return item.genres.join(', ');
  }
})

var movieLayout = new kendo.Layout('layout-template', { model: {} });
var listView = new kendo.View('list-template', { model: listModel });

var router = new kendo.Router({
  init: function() {
    movieLayout.render('#application');
    console.log('[Router initialized]');
  }
});

router.route('/', function(){
  movieLayout.showIn('#list', listView);
  console.log('[Navigated to \'/\']');
});

$(function(){
  movies.read();
  router.start();
});