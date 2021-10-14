const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const reviewsCreate = (req, res) => {};

const reviewsReadOne = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .select('name reviews')
        .exec((err, location) => {
            if (!location) {
                return res.status(404)
                    .json({
                        "message": "location not nof found - 2017265104 JaeYoungJang"
                    });
            } else if (err) {
                return res.status(400)
                    .json(err);
            }

            if (location.reviews && location.reviews.length > 0) {
                const review = location.reviews.id(req.params.reviewid);

                if (!review) {
                    return res
                        .status(404)
                        .json({
                            "message": "review not found - 2017265104 장재영"
                        });
                } else {
                    const response = {
                        location: {
                            name: location.name,
                            id: req.params.locationid
                        },
                        review
                    };

                    return res.status(200)
                        .json(response);
                }
            } else {
                return res.status(404).json({
                    "message": "No reviews found - 2017265104 장재영"
                });
            }
        });
};

const reviewsUpdateOne = (req, res) => {};
const reviewsDeleteOne = (req, res) => {};

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};