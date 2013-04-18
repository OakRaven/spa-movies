define(['models/layout'],
  function(layoutModel){

  console.log('** loading layouts/default');

  return new kendo.Layout('layout-template', { model: layoutModel });

});