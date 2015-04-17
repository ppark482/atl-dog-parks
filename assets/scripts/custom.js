$(document).ready( function() {       
  // Make sure the spreadsheet is published!
  var published_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1nD3NRMxzghJqzxCe2QTPJul_semQGr97b6yWBe0xdk0/pubhtml?gid=1984347147&single=true'; 

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
    var directorySource = $('#directory-template').html();
    var directoryTemplate = Handlebars.compile(directorySource);
    var directoryList = directoryTemplate(data);
    $('#descriptions').append(directoryList);
  }

  // Template for pop-up on map
  var popupSource   = $('#popup-template').html();
  var popupTemplate = Handlebars.compile(popupSource);

  // Map Instantiater
  var map = Mapsheet({
    provider: Mapsheet.Providers.Google,
    key: published_spreadsheet_url,
    element: 'map',
    popupTemplate: popupTemplate,
    sheetName: 'ITP'
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

});