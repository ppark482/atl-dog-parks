(function (createMap) {

	createMap(url);

}

(function (url) {

	var published_spreadsheet_url = url;

  // Uses Tabletop to pull data from Google Spreadsheet
  var init = function () {
    Tabletop.init({
      key: published_spreadsheet_url,
      callback : displayData,
      simpleSheet: true
    });
  }();

  // Displays items in sidebar
  function displayData(data, tabletop) {
  	var source = '{{#each this}}<li class="item" data-latitude="{{lat}}" data-longitude="{{lng}}"><a href="#map"><img class="directory-img" src="{{imageURL}}"><h3>{{index}}. {{name}}</h3><ul><li>{{address1}}</li><li>{{address2}}</li></ul></li></a>{{/each}}<li id="last"></li>';
		var directoryTemplate = Handlebars.compile(source);
		var directoryList = directoryTemplate(data);
		$('#descriptions').append(directoryList);  	
  }; 	

  // Template for pop-up on map
  var popupSource = '<h2>{{name}}</h2><img class="popup-img" src="{{imageURL}}"><ul><li><a href="https://www.google.com/maps?saddr=My+Location&daddr={{lat}},{{lng}}" target="_blank">Directions ></a></li><li><a href="{{website}}" target="_blank">Website ></a></li></ul><ul><li>Hours:</li><li>{{hours1}}</li><li>{{hours2}}</li></ul><div class="links"></div>';
  var popupTemplate = Handlebars.compile(popupSource);

  // Map Instantiater
  var map = Mapsheet({
    provider: Mapsheet.Providers.Google,
    key: published_spreadsheet_url,
    element: 'map',
    popupTemplate: popupTemplate,
    sheetName: 'Sheet1'
  });

  // Clicking on a list item centers map on selected item
  $('#descriptions').on('click', 'li', function () {
    var selected = $(this).data();
    map = Mapsheet({
      provider: Mapsheet.Providers.Google,
      key: published_spreadsheet_url,
      element: 'map',
      popupTemplate: popupTemplate,
      titleColumn: 'index',
      mapOptions: {
        zoom: 15,
        center: [selected.latitude, selected.longitude]
      }
    });
  });

}) // end local scope

); // end createMap