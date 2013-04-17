define(function(require){
  console.log('[Started]');

  var router = require('services/router'),
      dataService = require('services/data');

  router.start();
  dataService.movies.read();
});