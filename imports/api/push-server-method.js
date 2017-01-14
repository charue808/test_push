import { Meteor } from 'meteor/meteor';
import { Push  } from 'meteor/raix:push';

Push.debug = true;

Push.allow({
  send: function(userId, notification) {
    return true; //allow all users to send
  }
});

Meteor.methods({
  'serverNotification'(text,title) {
    var badge = 1;
      Push.send({
        from: 'push',
        title: title,
        text: text,
        badge: badge,
        sound: 'airhorn.caf',
        payload: {
          title: title,
          text:text,
          historyId: result
        },
        query: {
                // this will send to all users
        }
      });
  }
});
