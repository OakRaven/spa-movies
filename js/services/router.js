define(['layouts/default'], function(defaultLayout){
  console.log('** loading services/router');

  var router = new kendo.Router({
    init: function() {
      defaultLayout.render('#application');
      console.log('[Router initialized]');
    }
  });

  return {
    router: router
  };

});