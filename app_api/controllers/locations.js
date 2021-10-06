const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsReadOne = (req, res) => {
    res
        .status(200)
        .json({"status": "success"});
};

const locationsListByDistance = (req, res) => {};
const locationsCreate = (req, res) => {};
const locationsUpdateOne = (req, res) => {};
const locationsDeleteOne = (req, res) => {};

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne,
};