const express = require("express");
const morgan =  require("morgan");
const bitcoinRpc = require("node-bitcoin-rpc");
const port = 8080;

const app = express();
app.use(morgan("dev"));

app.get("/projekt", (req, res) => {

    try{
        bitcoinRpc.init('blockchain.oss.unist.hr', '8332', 'student', 'WYVyF5DTERJASAiIiYGg4UkRH');
        bitcoinRpc.call('getblockcount', [], function (err, btc_res) {
            if (err) {
              const errMsg = "Dogodila se greska prilikom pozivanja Bitcoin Core Api-ija: " + err;
              console.log(errMsg);
              throw new Error(errMsg);
            } 
            else if (btc_res.error) {
              const errMsg = "Pogreska primljena od strane Bitcoin Core-a " 
              + btc_res.error.message 
              + " (" + btc_res.error.code + ")";

              console.log(errMsg);
              throw new Error(errMsg);
            } 
            else {
              console.log('Odgovor od Bitcoin Core api-ija: ')
              console.log(btc_res.result);
              res.send("Get block count: " + btc_res.result);
            }
        });

    }catch(err){
        console.error("Dogodila se pogreska",err);
    }
    
});

app.listen(port, () => {
    console.log(`Kripto projekt pokrenut na portu ${port}!`);
});
