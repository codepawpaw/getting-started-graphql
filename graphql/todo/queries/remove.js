import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString
} from 'graphql';

import TodoInput from "../todo_input.js";
import TodoModel from "../todo_model.js";
import {Types} from 'mongoose';

class Remove {

  static remove() {
    return {
      type: GraphQLBoolean,
      args: {
        data: {
          name: 'data',
          type: TodoInput
        }
      },
      resolve (root, params, options) {
        return TodoModel
        .remove(params.data)
        .exec();
      }
    }
  }

}

export default Remove;

