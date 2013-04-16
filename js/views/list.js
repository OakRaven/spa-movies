// list.js

define(['models/list'], function(listModel){
  return new kendo.View('list-template', { model: listModel })
});