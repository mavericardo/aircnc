const Spot = require("../models/Spot");

module.exports = {
  show(request, response) {
    const { user_id } = request.headers;

    const spots = Spot.find({ user: user_id });

    return response.json(spots);
  }
};
