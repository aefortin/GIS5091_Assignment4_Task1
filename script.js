require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "esri/widgets/Legend", 
  "esri/widgets/LayerList", 
  "esri/widgets/ScaleBar", 
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home, Legend, LayerList, ScaleBar) {
  
  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77"
    }
  });
  
  var camera = new Camera({
    position: [-71.060217, 42.382655, 2500], 
    tilt: 45,
    heading: 180
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    camera: camera
  });
  
  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");

  view.when(function() {
    var featureLayer = scene.layers.getItemAt(1); 
    
    var legend = new Legend({
      view: view,
      layerInfos: [{
        layer: featureLayer,
        title: "Major project buildings"
      }]
    });
    
    var layerList = new LayerList({
      view: view
    });
    
    var scaleBar = new ScaleBar({
      view: view,
      unit: "dual"
    });
    

    view.ui.add(legend, "bottom-right");
    view.ui.add(layerList, "bottom-right");
    view.ui.add(scaleBar, "bottom-right");
  });
});
