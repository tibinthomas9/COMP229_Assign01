
//  FileName: contact.js
//  Name: Tibin Thomas
//  Student ID:301160586
//  Purpose: Used to handle contact routing 
//
var express = require('express');
var router = express.Router();
const Contact = require('../models/contact')

// helper function for guard purposes
function requireAuth(req, res, next)
{
// check if the user is logged in
if(!req.isAuthenticated())
{
return res.redirect('/login');
}
next();
}

router.get('/', requireAuth,async (req, res) => {
    console.log("contacts");
    const contactList = await Contact.find({});
    res.render('contacts', {
        contactList: contactList,
        title: "Contacts list"
    })
})
router.post('/', requireAuth,async (req, res) => {
    console.log(req.body);
    console.log("contacts");
    const contactList = await Contact.find({});
    var contact = new Contact({ name: req.body.firstname, number: req.body.phone, email: req.body.email });
 
    // save model to database
    contact.save(function (err, book) {
      if (err) return console.error(err);
      console.log(contact.name + " saved.");
      res.redirect('/contacts');
    });
    
})
router.get('/delete/:id',requireAuth, async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            res.status(404).send();
        }
        res.redirect('/contacts');
    } catch (e) {
        res.status(500).send();
    }

    
})

router.post('/delete/:id',requireAuth, async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            res.status(404).send();
        }
        res.redirect('/contacts');
    } catch (e) {
        res.status(500).send();
    }
})

router.post('/edit/:id',requireAuth, async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    const contact = await Contact.findByIdAndUpdate(req.params.id, { name: req.body.firstname, number: req.body.phone, email: req.body.email }, { new: true });
    console.log(contact);
    res.redirect('/contacts');


})

router.get('/edit/:id',requireAuth, async (req, res) => {


    const contact = await Contact.findById(req.params.id);

    res.render('updatecontact', {
        contact: contact,
        title: "Edit"
    })
})



module.exports = router;