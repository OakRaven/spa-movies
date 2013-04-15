var App = App || {};

App.Ui = (function(){
  var center_window = function(elementId) {
    $('#' + elementId).center();
  };

  var show_window = function(elementId) {
    $('#' + elementId).fadeIn('normal');
  };

  var hide_window = function(elementId) {
    $('#' + elementId).fadeOut('fast');
  };

  return {
    center_window: center_window,
    show_window: show_window,
    hide_window: hide_window
  };
})();