const eventModel = require("../models/eventModels");

exports.getEvents = async (req, res, next) => {
    try {
        const read = await eventModel.find();
        res.status(200).json({
            status: "success",
            data: read
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
        
   }
}

exports.getEvent = async (req, res, next) => {
    try {
        const read = await eventModel.find(req.params.id);
        res.status(200).json({
            status: "success",
            data: read
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
        
   }
}