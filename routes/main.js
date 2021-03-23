__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/menghadeh', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '-',
            namabot: 'GawdBOT',
            namaowner: 'Arman',
            instagram: '@manxtodd',
            youtube : 'Nothing'
        }
    }
    res.json(config)
})

module.exports = router
