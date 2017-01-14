import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';

import '../imports/ui/body.js';

// wrapped in if is cordova block
import '../imports/api/push_client.js';
