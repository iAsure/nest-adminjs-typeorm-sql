import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';
import { User } from '../users/user.entity.js';

const options: AdminJSOptions = {
  rootPath: '/admin',
  resources: [User],
};

export default options;
