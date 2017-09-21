import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString
} from 'graphql';

import UserType from "../user_type.js";
import UserInput from "../user_input.js";
import UserModel from "../user_model.js";
import {Types} from 'mongoose';

class Select {

  static find() {
    return {
      type: new GraphQLList(UserType),
      args: {
        data: {
          name: 'data',
          type: UserInput
        }
      },
      async resolve (root, params, options) {
        return UserModel
          .find(params.data)
          .exec();
      }
    }
  }

}

export default Select;

