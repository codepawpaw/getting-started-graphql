import mongoose from 'mongoose';
import User from '../user/user_model';

var userSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

var todoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  creator: userSchema
});

export default mongoose.model('Todo', todoSchema);
