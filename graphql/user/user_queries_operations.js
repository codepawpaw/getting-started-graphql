import Select from './queries/select';
import Remove from './queries/remove';

export default {
  removeUser: Remove.remove(),
  findUser: Select.find()
};
