import './register-api';

import { Records } from '/imports/api/records';
import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {
  // code to run on server at startup

  // TODO: this line was an experiment to prove there is a way to access MongoDB streaming API
  console.log(Records.rawCollection().find({}).stream );
});
