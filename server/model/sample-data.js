exports.data = 
     {    
        custid :         "00002",
        info : {
            lastname :  "Caster",
            firstname :  "Troy",
            initial :    "F",
            birthday :   new Date('12-12-2000'),
            sex :        "Male",
            contact: {
                phone : [{ntype : "Home", number: "123-4567"},{ntype : "Mobile", number: "0911-123-4567"}
                        ],     
                email :      "my@email.com"
            },    
            address : {
                current : {
                    street :     "Balagtas",
                    city :       "Makati",
                    country :    "Philippines",
                    zip :        "4001"
                }, 
                permanent : {
                    street :     "Arela",
                    city :       "SPC",
                    country :    "PH",
                    zip :        "4002"
                }
            }
        },
        accrecord: {
            accnumber:  "000-000-1",
            acctype:    "SAVINGS",         
            balance:    0,
            regdate:    new Date('12-12-2012'),
        },
        transrecord : [{
            transid:        "01aa",
            transtype:      "DEPOSIT",     
            transmethod:    "ATM",          
            transdate:      new Date(),
            amount:         100,
            remarks:        ""
        },
        {
            transid:        "01ab",
            transtype:      "WITHDRAWAL",     
            transmethod:    "ATM",          
            transdate:      new Date(),
            amount:         100,
            remarks:        ""
        }]
    };



