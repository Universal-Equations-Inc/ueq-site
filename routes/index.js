var express = require('express');
var router = express.Router();

const BLOG_URL = 'http://blogs.uequations.com';
const SHOP_URL = 'https://shop.uequations.com';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
            title: 'Universal Equations, Inc. | The Best in Strategy, Consulting, Digital, Technology and Operations Services'
            ,
            keywords: 'cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 7.00 pm'
            ,
            email_label: 'Mail Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_address: 'Greater Philadelphia Area, PA'
            ,
            home: 'Home'
            ,
            blog: 'Blog'
            ,
            shop: 'Shop'
            ,
            phone_label: ' +(267) 775 3011'
            ,
            phone_href: 'tel:+(267) 775 3011'
        }
    );
});

/* GET shop */
router.get('/shop', function (req, res, next) {
    res.redirect(SHOP_URL);
});

/* GET blog */
router.get('/blog', function (req, res, next) {

    res.redirect(BLOG_URL);
});


module.exports = router;
