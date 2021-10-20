const {
    response
} = require('express');
const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'http://loc8rv0.herokuapp.com';
}

const homeList = (req, res) => {
    const path = '/api/locations';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {
            lng: 127.0010,
            lat: 37.2501,
            maxDistance: 2000000
        }
    };
    request(
        requestOptions,
        (err, response, body) => {
            let data = [];
            if (response.statusCode === 200 && body.length) {
                data = body.map((item) => {
                    item.distance = formatDistance(item.distance);
                    return item;
                });
            };
            renderHomepage(req, res, body);
        }
    );
};

const formatDistance = (distance) => {
    let thisDistance = 0;
    let unit = 'm';
    if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
    } else {
        thisDistance = Math.floor(distance);
    }
    return thisDistance + unit;
}

const renderHomepage = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }

    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places \
            to work when out and about. Perhaps with coffee, cake or a pint? \
            Let Loc8r help you find the place you're looking for. 2017265104 장재영",
        locations: responseBody,
        message
    });
};

const renderDetailPage = function (req, res, location) {
    res.render('location-info', {
        title: location.name,
        pageHeader: {
            title: location.name
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and \
                space to sit down with your laptop and get some work done. 2017265104 장재영',
            callToAction: "If you've been and you like it - or if you don't\
                - please leave a review to help other people just like you. 2017265104 장재영"
        },
        location
    });
};

/* GET 'Location Info' page */
const locationInfo = (req, res) => {
    const path = `/api/locations/${req.params.locationid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            const data = body;
            if (response.statusCode === 200) {
                data.coords = {
                    lng: body.coords[0],
                    lat: body.coords[1]
                };
                renderDetailPage(req, res, data);
            } else {
                showError(req, res, response.statusCode);
            }

        }
    );
};

const showError = (req, res, status) => {
    let title = '404, page not found';
    let content = '';
    if (status === 404) {
        content = 'Oh dear. Looks like you can\'t find this page. Sorry - 2017265104 장재영'
    }
    else {
        title = `{status}, something's gone wrong`;
        content = 'Something, somewhere, has gone just a little bit wrong.';
    }
    res.status(status);
    res.render('generic-text', {
        title,
        content
    });
};

/* GET 'Add Review' page */
const addReview = function (req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};