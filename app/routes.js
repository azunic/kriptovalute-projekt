//create a new expres router
const express = require("express");
const bitcoinApiController = require("./controllers/bitcoinapi.controller");

//export router
module.exports = function(app){
    app.get("/", bitcoinApiController.getBtcData);
    app.get("/getBtcData", bitcoinApiController.getBtcData);
    app.get("/getBtcBlockDataForm", bitcoinApiController.getBtcBlockDataForm);
    app.post("/submitBtcBlockDataForm", bitcoinApiController.submitBtcBlockDataForm);
    app.get("/getBtcBlockData", bitcoinApiController.getBtcBlockData);
    app.get("/getBtcTxData", bitcoinApiController.getBtcTxData);
}