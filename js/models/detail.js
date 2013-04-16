// detail.js

define(['services/data'], function(dataService){
  var model = kendo.observable({
    closeDetailWindow: function(e){
      e.preventDefault();
      App.router.navigate('/');
    },
    setCurrent: function(id){
      this.set('movie', dataService.movies.get(id));
    }
  });

  return model;
});