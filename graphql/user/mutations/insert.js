import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import UserInput from "../user_input";
import UserModel from "../user_model";

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInput)
    }
  },
  async resolve (root, params, options) {
    const userModel = new UserModel(params.data);
    const newUserModel = await userModel.save();

    if (!newUserModel) {
      throw new Error('Error adding new blog post');
    }
    return true;
  }
};
