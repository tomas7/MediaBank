var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary');

cloudinary.v2.api.resources("dkxqapbiy",
    function(error, result) {console.log(result, error); });

router.get('/', function (req, res) {
    console.log("we hit server")
    // var sql = require("mssql");

    // config for your database
    var config = {
        user: 'Tom',
        password: 'Rjcnbr_111',
        server: 'localhost', 
        database: 'CompVsSabhamDb' 
    };

   

    res.send("working...")
      
        // requestIds.forEach(element => {
        
        // });
       

   
});

// var server = app.listen(5000, function () {
//     console.log('Server is running..');
// });

module.exports = router;
