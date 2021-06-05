const express = require('express');
const router = express.Router();

const Stock = require('../models/stocks');

//retrieving stocks
router.get('/stocks', (req,res,next) => {
    Stock.find((err,stocks) => {
        res.json(stocks);
    })
});

//add stocks
router.post('/stocks',(req,res,next) => {
    let newStock = new Stock({
        name: req.body.name,
        quantity: req.body.quantity,
        avgPrice: req.body.avgPrice,
        investedAmt: req.body.investedAmt
    });

    newStock.save((err, stock) => {
        if(err){
            res.json({msg: 'Failed to add stock'});
        } else {
            stock;
        }
    })
});

//delete stock
router.delete('/stocks/:id', (req,res,next) => {
    Stock.remove({_id: req.params.id}, (err,result)=>{
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
})
module.exports = router;