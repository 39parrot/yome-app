import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/app_body';
import '/imports/ui/components/form';
import '/imports/ui/components/balance';

FlowRouter.route('/', {
  triggersEnter: [
    function(context, redirect) {
      redirect('/form');
    }
  ]
});

FlowRouter.route('/form', {
  name: 'form',
  action() {
    BlazeLayout.render('App_body', { main: 'form' });
  }
});

FlowRouter.route('/balance', {
  name: 'balance',
  action() {
    BlazeLayout.render('App_body', { main: 'balance' });
  }
});
