const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringAsArray');
module.exports = {
    async index(request, response ) {
        const { latitude , longitude , techs } = request.query;

        const techArrays = ParseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techArrays,
            },
           location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        

        return response.json({ devs })
        
    }
}