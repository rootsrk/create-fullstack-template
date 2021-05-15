const express = require('express');
const router = express.Router();

const { checkConnection } = require('./utils/dbUtils');

router.post('/checkDBConnection', async (req, res, next) => {
  try {
    const rec = await checkConnection();
    res.json({ ...rec });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
