import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users } from '/imports/api/users/UsersCollection';
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
            function makeInterestObject(activity) {
              return { label: activity.name, selected: _.contains(pinnedActivities, Activity.name) };
            });
  },
  name() {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    console.log(userProfile);
    return `${userProfile.firstName} ${userProfile.lastName}`;
  },
  interests() {
    const profile = Profiles.findDoc(FlowRouter.getParam('username'));
    const selectedInterests = profile.interests;
    return profile && _.map(Interests.findAll(),
            function makeInterestObject(interest) {
              return { label: interest.name, selected: _.contains(selectedInterests, interest.name) };
            });
  },
});


