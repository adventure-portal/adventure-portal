import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.App_Not_Found.onCreated(function appBodyOnCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.App_Not_Found.helpers({
  // placeholder: if you display dynamic data in your layout, you will put your template helpers here.
});

Template.App_Not_Found.events({
  'click .ui.massive.violet.button'(event) {
    event.preventDefault();
    FlowRouter.go('Dashboard_Page');
  },
});
