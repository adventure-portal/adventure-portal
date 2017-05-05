import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Activities } from '/imports/api/activity/ActivityCollection';

Template.Details_Page.onCreated(function onCreated() {
  this.subscribe(Activities.getPublicationName());
  this.context = Activities.getSchema().namedContext('Details_Page');
});

Template.Details_Page.helpers({
  adventureProfile() {
    return Activities.findDoc(FlowRouter.getParam('adventureID'));
  },
});
