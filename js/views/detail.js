// detail.js

define(['models/detail'], function(detailModel){
  return new kendo.View('detail-template', { model: detailModel })
});