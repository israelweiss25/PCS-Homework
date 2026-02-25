import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = req.query.name ?? req.signedCookies.name ?? 'Express';
  req.query.name && res.cookie('name', req.query.name, {
    httpOnly: true,
    secure: true,
    signed:true
  });

  res.render('index', { title: name , partials: {
    content: 'form'
  }});
});

export default router;
