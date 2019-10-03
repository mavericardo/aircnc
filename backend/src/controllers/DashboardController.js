const Spot = require("../models/Spot");

module.exports = {
  async show(request, response) {
    const { user_id } = request.headers;

    const spots = await Spot.find({ user: user_id });
    console.log(spots);
    return response.json(spots);
  }
};
