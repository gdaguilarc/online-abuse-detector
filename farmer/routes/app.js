const bodyParser = require("body-parser");
let router = require("express").Router();

const APIController = require("../controllers/APIController");

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/", APIController.getTweet);

module.exports = router;
