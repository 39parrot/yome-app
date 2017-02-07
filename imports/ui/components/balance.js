import './balance.html';

import { Balances } from '/imports/api/balances';

Template.balance.helpers({
  balances() {
    return Balances.find({});
  },
});
