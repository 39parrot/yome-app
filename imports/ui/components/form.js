import './form.html';
import './history.html';
import './history';

import { Records } from '/imports/api/records';

Template.form.events({
  'submit .new-record'(event, instance) {
    // Prevent default browser form submit
    event.preventDefault();

    const parties = [];

    const member1 = {
      userId: event.target.member_1_userId.value,
      sum: event.target.member_1_sum.value || 0
    }

    const member2 = {
      userId: event.target.member_2_userId.value,
      sum: event.target.member_2_sum.value || 0
    }

    const member3 = {
      userId: event.target.member_3_userId.value,
      sum: event.target.member_3_sum.value || 0
    }

    if (validMember(member1)) { parties.push(member1); }
    if (validMember(member2)) { parties.push(member2); }
    if (validMember(member3)) { parties.push(member3); }

    Records.insert({ parties });

    // Clear form
    event.target.member_1_userId.value = '';
    event.target.member_1_sum.value = '';
    event.target.member_2_userId.value = '';
    event.target.member_2_sum.value = '';
    event.target.member_3_userId.value = '';
    event.target.member_3_sum.value = '';
  },
});

const validMember = function(member) {
  return member.userId;
}
