"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http_1 = require("http");
var dotenv_1 = require("dotenv");
var models_1 = require("./models");
dotenv_1.config();
models_1.db.sequelize.sync();
var app = express();
app.use(function (req, res) {
    res.send("\n  <div>\n    <h1>express server start http://localhost:" + process.env.PORT + "</h1>\n  </div>");
});
var server = http_1.createServer(app);
server.listen(process.env.PORT, function () {
    console.log("http://localhost:" + process.env.PORT);
});
//# sourceMappingURL=index.js.map