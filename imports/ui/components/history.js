import { Records } from '/imports/api/records';

Template.history.helpers({
  records() {
    return Records.find({});
  }
});
