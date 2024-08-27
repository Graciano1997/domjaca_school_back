const express = require('express');
const userNavegatingShow = require('../userNavegating');
const router = express.Router();

// Serve static files from the 'public' directory
router.use(express.static('public'));
// Route to render the dashboard main page
router.get('/', (req, res) => {
     userNavegatingShow(req);
    res.render('./dashboard/dashboard', (err) => {
        if (err) {
            console.error('Error rendering dashboard:', err);
            res.status(500).send('Server Error');
        }
    });
});

// Route to render the 'notas' page
router.get('/notas', (req, res) => {
     userNavegatingShow(req);
    res.render('./dashboard/notas', (err) => {
        if (err) {
            console.error('Error rendering notas:', err);
            res.status(500).send('Server Error');
        }
    });
});

// Route to render the 'aproveitamento' page
router.get('/aproveitamento', (req, res) => {
     userNavegatingShow(req);
    res.render('./dashboard/aproveitamento', (err) => {
        if (err) {
            console.error('Error rendering aproveitamento:', err);
            res.status(500).send('Server Error');
        }
    });
});

// Route to render the 'perfil' page
router.get('/perfil', (req, res) => {
     userNavegatingShow(req);
     response.status(200).res.render('./dashboard/perfil', (err) => {
        if (err) {
            console.error('Error rendering perfil:', err);
            res.status(500).send('Server Error');
        }
    });
});

module.exports = router;
