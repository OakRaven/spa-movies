define([
  'services/router',
  'services/data'],
  function(routeService, dataService){
  console.log('** loading models/detail');

  var model = kendo.observable({
    movie: { id: 0, posterUrl: '' },

    closeDetailWindow: function(e){
      e.preventDefault();
      routeService.router.navigate('/');
    },
    setCurrent: function(movie){
      this.set('movie', movie);
    },

    getPosterUrl: function(){
      return 'images/posters/' + this.get('movie').posterUrl;
    }
  });

  return model;
});