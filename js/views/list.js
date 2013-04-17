define(['models/list'], function(listModel){
  console.log('** loading views/list');
  return new kendo.View('list-template', { model: listModel })
});