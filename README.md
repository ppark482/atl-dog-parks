# Map + Directory Template

### Using with Medley - Preparation:

1. Clone this repository down, put desired name into 'new-name-here':

		git clone git@github.com:ajcdap/map-template.git new-name-here

2. Create a new Google Spreadsheet with these requirements:

	> ~ Make sure one column title in your spreadsheet is "lat" and another one is "lng";

	> ~ The column with title "hexcolor" determines the color of the marker on the map, use hexidecimal;

	> ~ Otherwise, add whatever column titles you want with the data that you will be displaying but keep them all lowercase, capitalization matters;

	> ~ You will access column data by their titles;

3. Populate spreadsheet with data including latitude and longitude coordinates;
	
	[Web App That Converts Address to Lat/Lng](http://www.latlong.net/convert-address-to-lat-long.html)

4. Publish the spreadsheet and grab the unique link:

		File > Publish to the web ... > Link: Entire Document: Publish
  
		https://docs.google.com/spreadsheets/d/unique-key

### Editing Map Data and Output:

- Step 1: In the `assets/spreadsheets` folder, copy and paste an existing file and rename it to whatever you want with the file extension `.js`.

		for example: atlanta_pothole_locations.js

- Step 2: In your new file that you created (i.e. atlanta_pothole_locations.js) you should see:

		var url = 'https://docs.google.com/spreadsheets/d/unique-key';

- Step 3: Change the link that's to the unique link that you got from the Google Spreadsheet that you published to the web.

- Step 4: After saving the new file, link to the new `.js` file in `index.html` in between the two comment blocks. Remove the old reference.

- Step 5: Place the entire directory onto the CMG host server under `ajc_prod/dev/projects/name-of-your-project`.

- Step 6: Open up `for_medley.txt`. The markup on this page is an edited version of `index.html` linking all sources to their proper directories on the CMG host server. Remove the old reference in between the two comment blocks and link to the new `.js` file that you've created.

		ex: http://host.coxmediagroup.com/ajc/dev/projects/your-project-name-here

## References
- [Handlebars.js](http://handlebarsjs.com/)
- [Tabletop.js](https://github.com/jsoma/tabletop)
- [Mapsheet](https://github.com/jsoma/mapsheet)