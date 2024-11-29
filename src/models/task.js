
const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User' } 
}, {
  timestamps: true 
});

module.exports = mongoose.model('Task', taskSchema);