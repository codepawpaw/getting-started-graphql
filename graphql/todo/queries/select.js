import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString
} from 'graphql';

import TodoType from "../todo_type.js";
import TodoInput from "../todo_input.js";
import TodoModel from "../todo_model.js";
import {Types} from 'mongoose';

class Select {

  static find() {
    return {
      type: new GraphQLList(TodoType),
      args: {
        data: {
          name: 'data',
          type: TodoInput
        }
      },
      async resolve (root, params, options) {
        return TodoModel
          .find(params.data)
          .exec();
      }
    }
  }

}

export default Select;

