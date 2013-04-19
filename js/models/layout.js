define(['services/router'], function(routeService){
  console.log('** loading models/layout');

  var paths = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' }
  ];

  var selectedPath = kendo.observable({ path: '/' });

  var navigate = function(e){
    e.preventDefault();
    routeService.navigate(e.data.path);
  };

  var isActive = function(item){
    if(selectedPath.get('path') === item.path){
      return 'active';
    }
  }

  return {
    paths: paths,
    selectedPath: selectedPath,
    navigate: navigate,
    isActive: isActive
  };

});