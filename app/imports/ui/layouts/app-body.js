import { Template } from 'meteor/templating';

Template.App_Body.onCreated(function appBodyOnCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.App_Body.helpers({
  // Check to see if currently on landing page
  landingPage: function landingPage() {
    if(FlowRouter.current().path == "/") {
      return true;
    }
  },
});

Template.App_Body.events({
 // placeholder: if you add a form to this top-level layout, handle the associated events here.
});

