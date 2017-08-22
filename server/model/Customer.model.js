"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema ({
    custid:         String,
    info: {
        lastname:  String,
        firstname:  String,
        initial:    String,
        birthday:   Date,
        sex:        String,
        contact: {
            phone: [{ntype: String, number: String}],     
            email:      String
        },    
        address: {
            current: {
                street:     String,
                city:       String,
                country:    String,
                zip:        String
            }, 
            permanent: {
                street:     String,
                city:       String,
                country:    String,
                zip:        String
            }
        }
    }
    ,
    accrecord: {
        // type: Schema.ObjectId,
        // ref: 'AccountRecord'
        accnumber:  String,
        acctype:    String,         //SAVINGS, CHECKING
        balance:    Number,
        regdate:    Date
    },
    transrecord : [{
        // type: Schema.ObjectId,
        // ref: 'TransactionRecord'
        branch:        String,
        transtype:      String,     // DEPOSIT, WITHDRAWAL, TRANSFER
        transmethod:    String,     // ATM, TELLER, WEB
        transdate:      Date,
        amount:         Number,
        remarks:        String
    }]
}, {
    collection: 'customer'
});

// const AccountRecordSchema = new Schema ({
//     accnumber:  String,
//     acctype:    String,         //SAVINGS, CHECKING
//     balance:    Number,
//     regdate:    Date
// });

// const TransactionRecordSchema = new Schema ({
//     transid:        String,
//     transtype:      String,     // DEPOSIT, WITHDRAWAL, TRANSFER
//     transmethod:    String,     // ATM, TELLER, WEB
//     transdate:      Date,
//     amount:         Number,
//     remarks:        String
// });

// const TransactionRecord = mongoose.model('TransactionRecord', TransactionRecordSchema);
//const AccountRecord = mongoose.model('AccountRecord', AccountRecordSchema);
module.exports = mongoose.model('customer', CustomerSchema);