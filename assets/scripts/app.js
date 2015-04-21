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
  	$.ajax({
  		url: '../mapsheet/assets/templates/directory_list.handlebars',
  		cache: true,
  		success: function (data) {
  			console.log(data);
  		}
  	});

  }

    // var directorySource = $('#directory-template').html();
    // var directoryTemplate = Handlebars.compile(directorySource);
    // var directoryList = directoryTemplate(data);
    // $('#descriptions').append(directoryList);

    // (function getTemplateAjax(path) {
    //     var source;
    //     var template;

    //     $.ajax({
    //         url: path, //ex. js/templates/mytemplate.handlebars
    //         cache: true,
    //         success: function(data) {
    //             source    = data;
    //             template  = Handlebars.compile(source);
    //             $('#target').html(template);
    //         }               
    //     });         
    // })()

  // Template for pop-up on map
  var popupSource   = $('#popup-template').html();
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