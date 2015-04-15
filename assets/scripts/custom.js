$(document).ready( function() {       
  // Make sure the spreadsheet is published!
  var published_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1-TPM7PTxKdwMZtAsHfPYoB-ZFTBSwErlkFiJXV1Agqo/pubhtml'; 

  var init = function () {
    Tabletop.init({
      key: published_spreadsheet_url,
      callback : displayData,
      simpleSheet: true
    });
  }();


  // Displays items in sidebar
  function displayData(data, tabletop) {
    var sidebarSource = $('#sidebar-template').html();
    var sidebarTemplate = Handlebars.compile(sidebarSource);
    var sidebarList = sidebarTemplate(data);
    $('#descriptions').append(sidebarList);
  }

  // Template for pop-up on map
  var popupSource   = $("#popup-template").html();
  var popupTemplate = Handlebars.compile(popupSource);

  // Map Instantiater
  var map = Mapsheet({
    provider: Mapsheet.Providers.Google,
    key: published_spreadsheet_url,
    element: "map",
    popupTemplate: popupTemplate,
    callback: function (mapsheet, tabletop) {
      // var listItems = [];
      // for(var i = 0; i < mapsheet.points.length; i++) {
      //   mapsheet.points[i].marker.icon.labelOrigin = mapsheet.points[i].model.name;
      //   listItems.push(mapsheet.points[i].model);
      // }
      // console.log(listItems);
      // console.log(mapsheet);
    }
  });

  $('#descriptions').on('click', 'li', function () {
    var selected = $(this).data();
    map = Mapsheet({
      provider: Mapsheet.Providers.Google,
      key: published_spreadsheet_url,
      element: 'map',
      popupTemplate: popupTemplate,
      mapOptions: {
        zoom: 15,
        center: [selected.latitude, selected.longitude]
      }
    });
    console.log(map);
  });

});