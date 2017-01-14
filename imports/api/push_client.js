import { Meteor } from 'meteor/meteor';
import { Push } from 'meteor/raix:push';

// wrapped in if meteor is cordova block
  Push.Configure({
    android: {
      senderID: 759006255778,
      alert: true,
      badge: true,
      sound: true,
      vibrate: true,
      clearNotifications: true
    }
  });
