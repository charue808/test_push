import { Meteor } from 'meteor/meteor';
import { Push } from 'meteor/raix:push';

import '../imports/api/tasks.js';


//wrapped in if meteor is cordova block
  import '../imports/api/push_server.js';
  import '../imports/api/push-server-method.js';
