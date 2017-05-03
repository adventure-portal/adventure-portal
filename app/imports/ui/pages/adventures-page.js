import { Template } from 'meteor/templating';
import { Activities } from '/imports/api/activity/ActivityCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Users } from '/imports/api/users/UsersCollection';
import { _ } from 'meteor/underscore';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Adventures_Page.onRendered(function onRendered() {
  this.$('.ui.dropdown').dropdown();
});

Template.Adventures_Page.onCreated(function onCreated() {
  this.subscribe(Interests.getPublicationName());
  this.subscribe(Activities.getPublicationName());
});

Template.Adventures_Page.helpers({
  activities() {
    return Activities.find({}, { sort: { title: 1 } });
  },
});

Template.Adventures_Page.events({
  /* Favorite event on clicking heart */
  'click .heart': function favoriteActivity(event) {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const activityId = this.activity._id;
    event.preventDefault();
    if (_.contains(userProfile.pinnedActivities, activityId)) {
      Users.update({ _id: userProfile._id }, { $pull: { pinnedActivities: activityId } });
    } else {
      if (userProfile.pinnedActivities === null) {
        Users.update({ _id: userProfile._id }, { $set: { pinnedActivities: [] } });
      }
      Users.update({ _id: userProfile._id }, { $push: { pinnedActivities: activityId } });
    }
  },
});

