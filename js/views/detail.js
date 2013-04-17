define(['models/detail'], function(detailModel){
  console.log('** loading views/detail');
  return new kendo.View('detail-template', { model: detailModel })
});