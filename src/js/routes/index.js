const express = require('express');
const router = express.Router();
const sitemap = require('sitemap');

const sm = sitemap.createSitemap ({
    hostname: 'https://www.uequations.com',
    cacheTime: 600 * 1000,
    urls: [
        { url: '/', changefreq: 'hourly', priority: 1.0 },
        { url: '/error', changefreq: 'hourly', priority: 1.0 },
        { url: '/capeStatement', changefreq: 'hourly', priority: 1.0 },
        { url: '/office365Inquiry', changefreq: 'hourly', priority: 1.0 },
        { url: '/privacy', changefreq: 'hourly', priority: 1.0 },
        { url: '/wiki', changefreq: 'hourly', priority: 1.0 },
        { url: '/shop', changefreq: 'hourly', priority: 1.0 },
        { url: '/blog', changefreq: 'hourly', priority: 1.0 },
        { url: '/events', changefreq: 'hourly', priority: 1.0 },
        { url: '/about', changefreq: 'hourly', priority: 1.0 },
        { url: '/newsletter-jan', changefreq: 'hourly', priority: 1.0 },
        { url: '/newsletter-dec', changefreq: 'hourly', priority: 1.0 }
    ]
});

/* external URLs */
const BLOG_URL = 'http://blogs.uequations.com';
const SHOP_URL = 'https://shop.uequations.com';
const GOVT_INQ_URL = "https://www.fedbizdirectory.com/business/d/080587713";
const COMCAST_URL = "https://my.xfinity.com";
const WIKI_URL = 'https://wiki.uequations.com';
const CCOMPUTEDEFN_URL = 'https://csrc.nist.gov/publications/detail/sp/800-145/final';

/* GET Dec Newsletter page. */
router.get('/newsletter-jan', function (req, res, next) {
    res.render('newsletter-2019-jan', {
            title: 'Universal Equations Cloud Computing and Data Analytics | January Newsletter'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'data analytics,cloud storage,cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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
            ,
            office_365: 'Microsoft Office 365'
            ,
            newsletter_date: 'January 2019'
        }
    );
});

/* GET Dec Newsletter page. */
router.get('/newsletter-dec', function (req, res, next) {
    res.render('newsletter-2018-dec', {
            title: 'Universal Equations Cloud Computing and Data Analytics | December Newsletter'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'data analytics,cloud storage,cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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
            ,
            office_365: 'Microsoft Office 365'
            ,
            newsletter_date: 'December 2018'
        }
    );
});

/* GET Events page. */
router.get('/events', function (req, res, next) {
    res.render('events', {
            title: 'Universal Equations Cloud Computing and Data Analytics | Events'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'data analytics,cloud storage,cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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
            ,
            office_365: 'Microsoft Office 365'
        }
    );
});

/* GET About Us page. */
router.get('/about', function (req, res, next) {
    res.render('about', {
            title: 'Universal Equations Cloud Computing and Data Analytics | About'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'data analytics,cloud storage,cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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
            ,
            office_365: 'Microsoft Office 365'
        }
    );
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
            title: 'Universal Equations Cloud Computing and Data Analytics | Welcome'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Reception Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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
            ,
            office_365: 'Microsoft Office 365'
            ,
            analytics_description: 'We help you use powerful technologies to develop data-based insights and predictive capabilities that drive bottom line results.'
        }
    );
});

/* GET Microsoft Office 365 Inquiry Form. */
router.get('/contact', function (req, res, next) {
    res.render('contact', {
            title: 'Universal Equations Cloud Computing and Data Analytics | General Inquiry Form'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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

/* GET Microsoft Office 365 Inquiry Form. */
router.get('/office365Inquiry', function (req, res, next) {
    res.render('office365Inquiry', {
            title: 'Universal Equations Cloud Computing and Data Analytics | Office 365 Inquiry Form'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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

/* GET Privacy Policy page */
router.get('/privacy', function (req, res, next) {
    res.render('privacy', {
            title: 'Universal Equations Cloud Computing and Data Analytics | Privacy Policy'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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

/* NIST Cloud Computing Definition */
router.get('/c-compute-defn', function (req, res, next) {
    res.redirect(CCOMPUTEDEFN_URL);
});

/* GET wiki */
router.get('/wiki', function (req, res, next) {
    res.redirect(WIKI_URL);
});

/* GET shop */
router.get('/shop', function (req, res, next) {
    res.redirect(SHOP_URL);
});

/* GET blog */
router.get('/blog', function (req, res, next) {

    res.redirect(BLOG_URL);
});

/* GET sitemap.xml */
router.get('/sitemap.xml', function(req, res) {
    sm.toXML( function (err, xml) {
        if (err) {
            return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
    });
});

/* GET governtment inquiries page */
router.get('/govtInquiry', function (req, res, next) {
    res.redirect(GOVT_INQ_URL);
});

/* GET Privacy Policy page */
router.get('/capeStatement', function (req, res, next) {
    res.render('capeStatement', {
            title: 'Universal Equations Cloud Computing and Data Analytics | Capability Statement'
            ,
            description: 'Universal Equations, Inc. | The Best in Cloud Computing and Data Analytics Consulting, Strategy, and Implementation Services'
            ,
            keywords: 'cloud, cloud computing, oracle cloud, cloud services, cloud hosting, private cloud, iot devices, hybrid cloud, oracle cloud services, cloud technology'
            ,
            hours: 'Opening Hours:  Mon - Fri : 9.00 am - 4.30 pm'
            ,
            email_label: 'Contact Us Today'
            ,
            email_address: 'support@uequations.com'
            ,
            location_label: 'Company Location'
            ,
            location_street: '325 Sentry Parkway,'
            ,
            location_building: 'Building 5 West, Suite 200,'
            ,
            location_address: 'Blue Bell, Pennsylvania 19422'
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

/* GET comcast site inquiries page */
router.get('/comcast', function (req, res, next) {
    res.redirect(COMCAST_URL);
});

module.exports = router;
