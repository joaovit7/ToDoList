const validatetitle = (req, res, next) => {
const { body } = req;

if (body.title === undefined) {
return res.status(400).json({message: 'the title is required'});
}

if (body.title === '') {
return res.status(400).json({message: 'the field cannot be empty'});
}

next();

};

const validatestatus = (req, res, next) => {
    const { body } = req;
    
    if (body.status === undefined) {
    return res.status(400).json({message: 'the status is required'});
    }
    
    if (body.status === '') {
    return res.status(400).json({message: 'the field cannot be empty'});
    }
    
    next();
    
    };



module.exports = {
validatetitle,
validatestatus,
};