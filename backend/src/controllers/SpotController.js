const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async store(request, response) {
    const { filename } = request.file;
    const { company, techs, price } = request.body;
    const { user_id } = request.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return response.status(400).json({
        error: "User does not exists"
      });
    }

    const spot = await Spot.create({
      user_id: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });

    return response.send(spot);
  }
};
