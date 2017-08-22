var express = require('express');
var app = express();
var custRouter = express.Router();

var Customer = require('../model/Customer.model');

//define get data(index or listing) record route
custRouter.route('/').get((req, res) => {
    Customer.find((err, cust) => {
        if(err) {
            console.log(err);
        } else {
            res.json(cust);
        }
    });
});

//define add record route
custRouter.post('/add/record', (req, res) => {
    var customer = new Customer(req.body);
    // var sampleData = require('../model/sample-data');
    // var data = sampleData.data;
    // var customer = new Customer(data);

    customer.save()
    .then((customer) => { 
        res.status(200).json('Record added successfully')
    })
    .catch((err) => {
        res.status(400).send('Record failed to add to the database')
    });
    //res.redirect('/customer');
});

//define edit record route
custRouter.get('/edit/:id', (req, res) => {
    var id = req.params.id;
    Customer.findById(id, (err, doc) => {
        if(err) {
            console.error('Error, no entry found');
        } else {
            res.json(doc);
        }
    });
    //res.redirect('/customer');
});

//define update record route
custRouter.put('/update/:id', (req, res) => {
    Customer.findById(req.params.id, (err, doc) => {
        if(!doc) {
            return next(new Error('Could not load document'));
        } else {
            // do updates here
            Customer.findByIdAndUpdate({_id:req.params.id}, req.body)
                .then(() => {
                    Customer.findOne({_id:req.params.id})
                        .then(doc => {
                            res.json('Record updated successfully')
                            //res.send(doc);
                        })
                })
                .catch((err) => {
                res.status(400).send("Unable to update record")
            });
        }
    });
});

//define delete | remove | destroy record route
custRouter.get('/delete/:id', (req, res) => {
    Customer.findByIdAndRemove({_id: req.params.id}, (err, doc) => {
        if(err) {
            res.json(err);
        } else {
            res.json('Record removed successfully!')
        }
    });
});

module.exports = custRouter;