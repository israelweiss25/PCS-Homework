var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    first: 'Donald',
    last: 'Trump',
    phone: '1234567890',
    email: 'dtrump@whitehouse.gov'
  },
  {
    id: 2,
    first: 'JD',
    last: 'Vance',
    phone: '9876543210',
    email: 'jd@whitehouse.gov'
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contact List',
    contacts,
    noContacts: !contacts?.length,
    partials: { content: 'index.hjs' }
  });
});

router.get('/addContact', (req, res, next) => {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'addContact.hjs' }
  });
});

router.post('/addContact', (req, res, next) => {
  req.body.id = contacts.length + 1;
  contacts.push(req.body);

  res.writeHead(301, {
    location: '/'
  });

  res.end();
});

router.post('/deleteContact/:id', (req, res, next) => {
  contacts = contacts.filter(c => c.id !== Number(req.params.id));

  res.writeHead(301, {
    location: '/'
  });

  res.end();
});

router.get('/editContact/:id', (req, res, next) => {
  const fltrContact = contacts.find(c => c.id === Number(req.params.id))
  res.render('layout', {
    title: 'Edit contact',
    contact: fltrContact,
    partials: { content: 'addContact.hjs' }
  });
});

router.post('/editContact/:id', (req, res, next) => {
  contacts = contacts.filter(c => c.id !== Number(req.params.id));
  req.body.id = Number(req.params.id);
  contacts.push(req.body);

  res.writeHead(301, {
    location: '/'
  });

  res.end();

});

router.get('/api/contacts', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.send(contacts);
});
module.exports = router;
