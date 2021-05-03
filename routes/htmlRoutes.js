// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  //app.set('views', path.join(__dirname,'views'));
  app.set('view engine', 'ejs');

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/tables", (req, res) => {
    console.log(tableData);
    res.render(path.join(__dirname,'../views/pages/tables'),{tableData});
  });

  app.get("/reserve", (req, res) => {
    res.render(path.join(__dirname,'../views/pages/reserve'));
  });

  // If no matching route is found default to home
  app.get("/", (req, res) => {
    res.render(path.join(__dirname,'../views/pages/home'));
  });
};
