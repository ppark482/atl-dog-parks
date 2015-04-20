# Map + Directory of Dog Parks in Atlanta

## How to use with Medley:

Preparation:
- Clone this repository down, put desired name into 'new-name-here':

				git clone git@github.com:ajcdap/map-template.git new-name-here

- If git/github makes you uncomfortable, copy and paste the entire directory from the CMG Host server;

- Create a new Google Spreadsheet with these requirements:

				~ Make sure one column title in your spreadsheet is "lat" and another one is "lng";
				~ The column with title "hexcolor" determines the color of the marker on the map, use hexidecimal;
				~ Otherwise, add whatever column titles you want with the data that you will be displaying but keep them all lowercase, capitalization matters;
				~ You will access column data by their titles;

- Populate spreadsheet with data including latitude and longitude coordinates;
	
	[Web App That Converts Address to Lat/Lng](http://www.latlong.net/convert-address-to-lat-long.html)

- Publish the spreadsheet and grab the unique link:

				File > Publish to the web ... > Link: Entire Document: Publish
				https://docs.google.com/spreadsheets/d/unique-key

Editing Map Data and Output

- Step 1: Replace the existing url in assets/scripts/custom.js:

				var published_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/unique-key';



## References
- [Handlebars.js](http://handlebarsjs.com/)
- [Tabletop.js](https://github.com/jsoma/tabletop)
- [Mapsheet](https://github.com/jsoma/mapsheet)