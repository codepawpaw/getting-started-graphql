import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString
} from 'graphql';

import UserInput from "../user_input.js";
import UserModel from "../user_model.js";
import {Types} from 'mongoose';

class Remove {

  static remove() {
    return {
      type: GraphQLBoolean,
      args: {
        data: {
          name: 'data',
          type: UserInput
        }
      },
      resolve (root, params, options) {
        return UserModel
        .remove(params.data)
        .exec();
      }
    }
  }

}

export default Remove;

