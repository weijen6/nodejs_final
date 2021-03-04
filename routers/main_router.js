let express = require('express');
let router = express.Router();
let Weijen6 = require('./Weijen6.js');
let Alice = require('./Alice.js');
let Bob = require('./Bob.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Weijen6', Weijen6);
router.use('/Alice', Alice);
router.use('/Bob', Bob);

module.exports = router;