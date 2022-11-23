
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  list: { type: String, required: false },
  user: { type: String, required:true },
  
})

module.exports = mongoose.model('todo', todoSchema)



/*module.exports = [{
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
*/