import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users } from '/imports/api/users/UsersCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';
import './my-profile.html';

Template.My_Profile_Page.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
  this.context = Users.getSchema().namedContext('My_Profile_Page');
});

Template.My_Profile_Page.helpers({
  profile() {
    return Users.findDoc(FlowRouter.getParam('username'));
  },
  activities() {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const userActivities = userProfile.pinnedActivities;
    return userProfile && _.map(Activities.findAll(),
            function makeActivityObject(activity) {
              return { label: activity.name, selected: _.contains(pinnedActivities, Activity.name) };
            });
  },
  interests() {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const selectedInterests = userProfile.interests;
    return userProfile && _.map(Interests.findAll(),
            function makeInterestObject(interest) {
              return { label: interest.name, selected: _.contains(selectedInterests, interest.name) };
            });
  },
});


