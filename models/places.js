const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)



module.exports = [{
    name: 'J-Tops bbq shop',
        city: 'clayton',
        state: 'NC',
        cuisines: 'BBQ, Ribs, Chicken, ETC',
        pic: '/images/JTop_s-logo-greyscale-white.png'
      }, {
          name: 'fivestarraleigh',
          city: 'Raleigh',
          state: 'NC',
          cuisines: 'chinese, drinks',
          pic: '/images/81806fivestar_logo.png'
}]