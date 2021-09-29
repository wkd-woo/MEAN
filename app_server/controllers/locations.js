/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapLine: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. \
        Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
                name: 'Starbucks',
                address: '경기도 수원시 권선구 권선동',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            }, {
                name: 'Hollys Coffee',
                address: '경기도 수원시 권선구 권선동',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            },
            {
                name: 'McDonald`s',
                address: '경기도 수원시 권선구 권선동',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '250m'
            }, {
                name: 'rendeja-vous',
                address: '경기도 수원시 팔달구 인계동',
                rating: 4,
                facilities: ['Hot drinks', 'Premium wifi'],
                distance: '1250m'
            },
            {
                name: 'Trip Asia',
                address: '경기도 수원시 팔달구 인계동',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '1250m'
            }
        ]
    });
};

/* GET 'Location Info' page */
const locationInfo = (req, res) => {
    res.render('location-info', {
        title: 'Location Info',
        pageHeader: {
            title: 'Loc8r',
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '경기도 수원시 권선구',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 37.2597,
                lng: 127.0089
            },
            openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                },
                {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },
                {
                    days: 'Sunday',
                    closed: true
                }
            ],
            reviews: [{
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                },
                {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                }
            ]
        }
    });
}

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
    homelist,
    locationInfo,
    addReview
};