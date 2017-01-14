import { Meteor } from 'meteor/meteor';
import { Push } from 'meteor/raix:push';

Push.Configure({
  gcm: {
    apiKey: 'AAAAsLhMWqI:APA91bGAD-n4BFBL9aaJ2rpV_VfDnU3dwnHJAokOY2YzIWVywnI8MmGv9YLNjj_M3GlCx9x0P1rLQTe8zIE6naCxY-pSB0wbKiwqmz52UlIVKZIIlr4V1LztEY9_mW1755kz8pW_x_ar',
    projectNumber: 759006255778
  }
});
