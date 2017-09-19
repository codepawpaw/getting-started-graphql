import Select from './queries/select';
import Remove from './queries/remove';

export default {
  remove: Remove.remove(),
  find: Select.find()
};
