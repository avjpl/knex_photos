const express = require('express');
const router = express.Router();

const db = require('./../../db');

router.get('/page/:page?', async (req, res) => {
  const itemsPerPage = 10;
  const limitItems = 10;

  let page = req.params?.page;
  let offset = 0;

  console.log({ page });

  if (!page)
    offset = 0;

  if (page) {
    offset = +page * itemsPerPage;
  }

  const photos = await db.select('*').from('photos').limit(limitItems).offset(offset);

  if (!photos.length)
    res.status(204).end();

  if (photos.length)
    res.json(photos);
});

module.exports = router;
