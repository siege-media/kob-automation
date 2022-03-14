function onOpen() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var menu = SpreadsheetApp.getUi().createMenu("Search Result")
    .addItem("Search", "searchAPI")
    .addToUi()
}

function searchAPI() {
  var API_KEY = 'AIzaSyDzhRlUjmik2aTVEpQI7yMBDqd-_HTXhbU'
  var CX = '694abcc303f7bdcef'
  
  var range = SpreadsheetApp.getActiveSheet().getActiveRange().getValues();
  var ui = SpreadsheetApp.getUi();

  for (let i = 0; i < range.length; i++) {
    var cell = range[i];
    var formatCell = cell.toString().replace("", "+")

    var url = "https://www.googleapis.com/customsearch/v1?key=" + API_KEY + "&cx=" + CX + "&q=" + formatCell;

    var response = UrlFetchApp.fetch(url)
    var data = JSON.parse(response);

    if (data) {
      var colLocal = SpreadsheetApp.getSelection().getCurrentCell().getColumn()
      var rowLocal = SpreadsheetApp.getSelection().getCurrentCell().getRow() + i;
      // In this scenario, we're only interested in the first search result
      for (var j = 0; j < 1; j++) {
        // Add top ranking result to "Ranking Page URL" column D (the fourth column based on zero index, we'll use 3)
        var d = SpreadsheetApp.getActiveSheet().getRange(rowLocal, colLocal + 3);
        // To avoid null values breaking the tool, create a use case if a link doesn't exist
        if (!data["items"][j].link) {
          d.setValue(`No Search Results`);
        } else {
          // otherwise, set the value of the corresponding cell in column D to the first search result
          d.setValue(`${data["items"][j].link}`);
        }
      } 
    } else {
      ui.alert("Something Failed During Search");
    }
  }
}
