define(['layouts/default'], function(defaultLayout){
  console.log('** loading services/router');

  var router = new kendo.Router({
    init: function() {
      defaultLayout.render('#application');
      console.log('[Router initialized]');
    }
  });

  var navigate = function(path){
    router.navigate(path);
  };

  return {
    router: router,
    navigate: navigate
  };

});