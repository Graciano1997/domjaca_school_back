const express = require('express');
const userNavegatingShow = require('../userNavegating');
const router = express.Router();

// Serve static files from the 'public' directory
router.use(express.static('public'));
// Route to render the dashboard main page
router.get('/', (req, res) => {
     userNavegatingShow(req);
    res.render('./dashboard/dashboard');
});

// Route to render the 'notas' page
router.get('/notas', (req, res) => {
     userNavegatingShow(req);
    res.render('./dashboard/notas');
});

// Route to render the 'aproveitamento' page
router.get('/aproveitamento', (req, res) => {
     userNavegatingShow(req);
    res.render('./dashboard/aproveitamento');
});

// Route to render the 'perfil' page
router.get('/perfil', (req, res) => {
     userNavegatingShow(req);
    res.render('./dashboard/perfil');
});

module.exports = router;
