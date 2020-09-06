let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(express.static(__dirname + "/public"));

let methodOverride = require("method-override");
app.use(methodOverride("_method"));

let appRoutes = require("./routes/app");

app.use("/", appRoutes);

let appConfig = require("./configs/app");

app.listen(appConfig.express_port, () => {
  let show =
    "App listening on port " +
    appConfig.express_port +
    "! (http://localhost:" +
    appConfig.express_port +
    ")";
  console.log(show);
});
