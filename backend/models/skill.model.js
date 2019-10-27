const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const skillSchema = new Schema ({ 
  username:     { type: String, required: true },
    description:  { type: String, required: true },
    duration:     { type: String, required: true },
    date:         { type: String, required: true },
  }, {
  timestamps: true,
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
