# Map + Directory of Dog Parks in Atlanta

### Using with Medley - Preparation:

1. Clone this repository down, put desired name into 'new-name-here':

		git clone git@github.com:ajcdap/map-template.git new-name-here

2. If git/github makes you uncomfortable, copy and paste the entire directory from the CMG Host server;

3. Create a new Google Spreadsheet with these requirements:

	> ~ Make sure one column title in your spreadsheet is "lat" and another one is "lng";

	> ~ The column with title "hexcolor" determines the color of the marker on the map, use hexidecimal;

	> ~ Otherwise, add whatever column titles you want with the data that you will be displaying but keep them all lowercase, capitalization matters;

	> ~ You will access column data by their titles;

4. Populate spreadsheet with data including latitude and longitude coordinates;
	
	[Web App That Converts Address to Lat/Lng](http://www.latlong.net/convert-address-to-lat-long.html)

5. Publish the spreadsheet and grab the unique link:

		File > Publish to the web ... > Link: Entire Document: Publish
  
		https://docs.google.com/spreadsheets/d/unique-key

### Editing Map Data and Output:


- Step 1: Replace the existing url in assets/scripts/custom.js:

		var published_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/unique-key';

- Step 2: In index.html, find these two pieces of code. These are the templates that are used to render the list and the map popups:

	![Directory Template HTML](http://host.coxmediagroup.com/ajc/dev/projects/mapsheet/assets/images/directory-template-screenshot.png)

	This template controls what the item list looks like. You only need to edit:

		{{#each this}}
			<li class="item" data-latitude="{{lat}}" data-longitude="{{lng}}">

				// only edit the code in here using html markup

			</li>
		{{/each}}

	![Popup Template HTML](http://host.coxmediagroup.com/ajc/dev/projects/mapsheet/assets/images/popup-template-screenshot.png)

	This template controls what the pop-up looks like when a marker is clicked.



## References
- [Handlebars.js](http://handlebarsjs.com/)
- [Tabletop.js](https://github.com/jsoma/tabletop)
- [Mapsheet](https://github.com/jsoma/mapsheet)