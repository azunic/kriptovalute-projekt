const url = require('url');
<<<<<<< HEAD
require('dotenv').config();
const bitcoin_rpc = require('node-bitcoin-rpc');

bitcoin_rpc.init(
	process.env.UNIST_SERVER, 
	process.env.UNIST_PORT, 
	process.env.UNIST_USER, 
	process.env.UNIST_PASSWORD
);
=======

const bitcoin_rpc = require('node-bitcoin-rpc')
bitcoin_rpc.init('blockchain.oss.unist.hr', '8332', 'student', '2B4DB3SmsM2B4DB3SmsM89QjgYFp89QjgYFp');
>>>>>>> e17f566c19ee3bb257c451aa89759cf5edcba35f

module.exports = {

	getBtcData: async (req, res) =>  {
		const queryObject = url.parse(req.url, true).query;
		console.log("queryObject", queryObject);

		const btcEndpoint = queryObject.endpoint ? queryObject.endpoint : "getbalance"; 
		console.log("btcEndpoint", btcEndpoint);

		try{

			bitcoin_rpc.call(btcEndpoint, [], function (err, resp) {
			  if (err) {
				const errMsg = "Error when calling bitcoin RPC: " + err;
				console.log(errMsg);
				res.render('list', {
					data: null,
					bitcoinError: errMsg, 
					endpoint: 'callingBitcoinRpcError'
				});

			  } else if (resp.error) {
				const errMsg = "Error received by bitcoin RPC: " + resp.error.message + " (" + resp.error.code + ")";
				console.log(errMsg);

				res.render('list', {
					data: null,
					bitcoinError: errMsg, 
					endpoint: 'receivedBitcoinRpcError'
				});

			  } else {
				console.log('Yay! I need to do whatever now with ' + resp.result);
				console.log(resp.result);
				res.render('list', {
					data:  resp.result,
					endpoint: btcEndpoint,
					bitcoinError: null
				});
				
			  }
			});

		}catch(e){
			console.log("An error occurred: ", e);
<<<<<<< HEAD
=======
			req.session.mymessage = {type: "danger", text: e};
>>>>>>> e17f566c19ee3bb257c451aa89759cf5edcba35f
			res.redirect('/');
		}
	},
	
	getBtcBlockDataForm: async (req, res) =>  {
		
		res.render('list', {
			data:  null,
			endpoint: 'blockDataForm',
			bitcoinError: null
		});
				
	},

	submitBtcBlockDataForm: async (req, res) =>  {
		console.log("submitBtcBlockDataForm queryObject", req.body);
		res.redirect('/getBtcBlockData?endpoint=getblock&blockhash=' + req.body.blockhash);				
	},

	getBtcBlockData: async (req, res) =>  {
		const queryObject = url.parse(req.url, true).query;
		console.log("queryObject", queryObject);
		const bestBlockHash = '00000000000242b208500982428a4a3db29b9bcc54624d263046fe60e45231df';
		const btcEndpoint = queryObject.endpoint ? queryObject.endpoint : "getbalance"; 
		const blockhash = queryObject.blockhash ? queryObject.blockhash : bestBlockHash; 
		console.log("btcEndpoint", btcEndpoint);
		console.log("blockhash", blockhash);

		try{

			bitcoin_rpc.call(btcEndpoint, [blockhash], function (err, resp) {
			  if (err) {
				const errMsg = "Error when calling bitcoin RPC: " + err;
				console.log(errMsg);
				res.render('list', {
					data: null,
					bitcoinError: errMsg, 
					endpoint: 'callingBitcoinRpcError'
				});

			  } else if (resp.error) {
				const errMsg = "Error received by bitcoin RPC: " + resp.error.message + " (" + resp.error.code + ")";
				console.log(errMsg);

				res.render('list', {
					data: null,
					bitcoinError: errMsg, 
					endpoint: 'receivedBitcoinRpcError'
				});

			  } else {
				console.log('Yay! I need to do whatever now with ' + resp.result);
				console.log(resp.result);
				res.render('list', {
					data:  resp.result,
					endpoint: btcEndpoint,
					bitcoinError: null
				});
				
			  }
			});

		}catch(e){
			console.log("An error occurred: ", e);
			req.session.mymessage = {type: "danger", text: e};
			res.redirect('/');
		}
	},
	
	getBtcTxData: async (req, res) =>  {
		const queryObject = url.parse(req.url, true).query;
		console.log("queryObject", queryObject);
		const bestTx = '883e8793c63bd947c31b14d61034647132d5324bb4a64ffc049e1abb8fcc2dd4';
		const btcEndpoint = queryObject.endpoint ? queryObject.endpoint : "getbalance"; 
		const tx = queryObject.txId ? queryObject.txId : bestTx; 
		console.log("btcEndpoint", btcEndpoint);
		console.log("tx", tx);

		try{

			bitcoin_rpc.call(btcEndpoint, [tx], function (err, resp) {
			  if (err) {
				const errMsg = "Error when calling bitcoin RPC: " + err;
				console.log(errMsg);
				res.render('list', {
					data: null,
					bitcoinError: errMsg, 
					endpoint: 'callingBitcoinRpcError'
				});

			  } else if (resp.error) {
				const errMsg = "Error received by bitcoin RPC: " + resp.error.message + " (" + resp.error.code + ")";
				console.log(errMsg);

				res.render('list', {
					data: null,
					bitcoinError: errMsg, 
					endpoint: 'receivedBitcoinRpcError'
				});

			  } else {
				console.log('Yay! I need to do whatever now with ' + resp.result);
				console.log(resp.result);
				res.render('list', {
					data:  resp.result,
					endpoint: btcEndpoint,
					bitcoinError: null
				});
				
			  }
			});

		}catch(e){
			console.log("An error occurred: ", e);
			req.session.mymessage = {type: "danger", text: e};
			res.redirect('/');
		}
    },
    
}