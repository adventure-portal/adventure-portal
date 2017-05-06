import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Activities } from '/imports/api/activity/ActivityCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';
import { _ } from 'meteor/underscore';

Template.Details_Page.onCreated(function onCreated() {
  this.subscribe(Activities.getPublicationName());
  this.context = Activities.getSchema().namedContext('Details_Page');
});

Template.Details_Page.helpers({
  adventureProfile() {
    return Activities.findDoc(FlowRouter.getParam('adventureID'));
  },
  interests() {
    return _.map(Interests.findAll(),
        function makeInterestObject(interest) {
          return {
            label: interest.name,
          };
        });
  },
});
