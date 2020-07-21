exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all bootcamp'});
}
// with ID 
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create new'});
}

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'new bootcamp'});
}

//with id 
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Update bootcamp'});
}

//with id
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'bootcamp deleted'});
}