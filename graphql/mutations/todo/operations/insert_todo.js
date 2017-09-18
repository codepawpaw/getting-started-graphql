import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import TodoInput from '../input/todo_input.js';
import TodoModel from '../../../../models/todo_model';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(TodoInput)
    }
  },
  async resolve (root, params, options) {
    const todoModel = new TodoModel(params.data);
    const newTodoModel = await todoModel.save();

    if (!newTodoModel) {
      throw new Error('Error adding new blog post');
    }
    return true;
  }
};
