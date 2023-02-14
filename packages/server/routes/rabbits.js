const express = require('express');
const router = express.Router();
const rabbitBreeds = require('../rabbits.json'); // The JSON is from here: https://github.com/dariusk/corpora

router.get('/', (req, res) => {
    res.send(rabbitBreeds);
});

module.exports = router;